<?php

namespace unionco\relatedentrytypes\controllers;

use Craft;
use craft\web\Controller;

class DefaultController extends Controller
{
    public $allowAnonymous = ['types'];
    public $enableCsrfValidation = false;

    public function actionTypes()
    {
        $this->requirePostRequest();
        $rawBody = Craft::$app->request->getRawBody();
        $sectionUids = \json_decode($rawBody);

        if (count($sectionUids) < 1) {
            return '';
        }


        //var_dump($sectionUids); die;
        $sections = null;
        if (count($sectionUids) == 1 && $sectionUids[0] == '*') {
            $sections = Craft::$app->getSections()->getAllSections();
        } else {
            $sections = array_map(function ($sectionUid) {
                $uid = preg_replace('/section:/', '', $sectionUid);
                return Craft::$app->getSections()->getSectionByUid($uid);
            }, $sectionUids);
        }

        // var_dump($sections); die;
        $entryTypes = [];
        
        foreach ($sections as $section) {
            $entryTypesForSection = Craft::$app->sections->getEntryTypesBySectionId($section->id);
            $entryTypes[$section->id] = array_map(function ($entryType) {
                return [
                    'value' => $entryType->id,
                    'id' => $entryType->id,
                    'label' => $entryType->name,
                ];
            }, $entryTypesForSection);
        }
        return $this->renderTemplate(
            'related-entry-types/_partials/EntryType_types', 
            [
                'sections' => $sections,
                'entryTypes' => $entryTypes,
            ]
        );
    }
}