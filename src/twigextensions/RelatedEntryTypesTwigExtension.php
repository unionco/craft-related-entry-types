<?php

namespace unionco\relatedentrytypes\twigextensions;

use Craft;
use craft\web\Application;
use Twig\Extension\AbstractExtension;
use unionco\relatedentrytypes\RelatedEntryTypesPlugin;
use unionco\relatedentrytypes\fields\RelatedEntryTypesField;

class RelatedEntryTypesTwigExtension extends AbstractExtension
{
    public function __construct()
    {
        Craft::$app->on(Application::EVENT_INIT, function () {
            $env = Craft::$app->getView()->getTwig();
            $env->addGlobal('relatedEntryTypes', RelatedEntryTypesPlugin::$plugin);
        });
    }

    public function getFunctions()
    {
        return [
            new \Twig\TwigFunction(
                'selectedSections',
                [$this, 'selectedSections']
            ),
            new \Twig\TwigFunction(
                'entryTypes',
                [$this, 'entryTypes']
            ),
            new \Twig\TwigFunction(
                'entryTypeValues',
                [$this, 'entryTypeValues']
            ),
        ];
    }

    /**
     * @param RelatedEntryTypesField $field
     */
    public function selectedSections($field): array
    {
        $sources = $field->sources;
        if ($sources == '*') {
            return Craft::$app->getSections()->getAllSections();
        }
        return array_map(
            /**
             * @param string $source
             * @return null|Section
             **/
            function ($source) {
                $exploded = explode(':', $source);
                switch ($exploded[0]) {
                    case 'section':
                        return Craft::$app->getSections()->getSectionByUid($exploded[1]);
                        break;
                }
            },
            $sources
        );
    }

    public function entryTypes(array $sections): array
    {
        $entryTypes = [];
        foreach ($sections as $section) {
            if (!$section) {
                continue;
            }
            $entryTypes = array_merge($entryTypes, Craft::$app->getSections()->getEntryTypesBySectionId($section->id));
        }
        return array_map(function ($entryType) {
            return [
                'value' => $entryType->id,
                'id' => $entryType->id,
                'label' => $entryType->name,
            ];
        }, $entryTypes);
    }

    public function entryTypeValues($entryTypes): array
    {
        if (!$entryTypes) {
            return [];
        }
        return array_map(function ($entryType) {
            return $entryType['id'] ?? $entryType;
        }, $entryTypes);
    }
}
