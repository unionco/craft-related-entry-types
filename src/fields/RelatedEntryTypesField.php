<?php
/**
 * Related Entry Types plugin for Craft CMS 3.x
 *
 * A Craft Field type that allows more control over related entries.
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\relatedentrytypes\fields;

use Craft;
use craft\base\Field;
use craft\helpers\Json;
use craft\elements\Entry;
use craft\fields\Entries;
use craft\models\EntryType;
use craft\base\ElementInterface;
use unionco\relatedentrytypes\models\Sections;
use unionco\relatedentrytypes\models\EntryTypes;
use unionco\relatedentrytypes\assetbundles\relatedentrytypesfield\RelatedEntryTypesFieldAsset;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   RelatedEntryTypes
 * @since     0.0.1
 */
class RelatedEntryTypesField extends Entries
{
    // Public Properties
    // =========================================================================

    /**
     * @var array $sections
     */
    public $sections;

    /**
     * @var array $entryTypes;
     */
    public $entryTypes;

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('related-entry-types', 'Related Entry Types');
    }

    // Public Methods
    // =========================================================================

    public function __construct(array $config = [])
    {
        parent::__construct($config);
    }

    /**
     * @inheritdoc
     * @return void
     */
    public function init()
    {
        parent::init();
    }

    /**
     * @inheritdoc
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();

        return $rules;
    }

    /**
     * @inheritdoc
     * @return mixed
     */
    public function normalizeValue($value, ElementInterface $element = null)
    {
        return parent::normalizeValue($value, $element);
    }

    /**
     * @inheritdoc
     * @return mixed
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        return parent::serializeValue($value, $element);
    }

    /**
     * @inheritdoc
     * @return null|string
     */
    public function getSettingsHtml()
    {
        // Render the settings template
        return Craft::$app->getView()->renderTemplate(
            'related-entry-types/_components/fields/RelatedEntryTypes_settings',
            [
                'field' => $this,
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        // Register our asset bundle
        Craft::$app->getView()->registerAssetBundle(RelatedEntryTypesFieldAsset::class);

        // Get our id and namespace
        $id = Craft::$app->getView()->formatInputId($this->handle);
        $namespacedId = Craft::$app->getView()->namespaceInputId($id);

        // Variables to pass down to our field JavaScript to let it namespace properly
        $jsonVars = [
            'id' => $id,
            'name' => $this->handle,
            'namespace' => $namespacedId,
            'prefix' => Craft::$app->getView()->namespaceInputId(''),
        ];
        $jsonVars = Json::encode($jsonVars);
        Craft::$app->getView()->registerJs("$('#{$namespacedId}-field').RelatedEntryTypesField(" . $jsonVars . ");");

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'related-entry-types/_components/fields/RelatedEntryTypes_input',
            [
                'name' => $this->handle,
                'value' => $value,
                'field' => $this,
                'id' => $id,
                'namespacedId' => $namespacedId,
                'sources' => $this->sources,
                'entryTypes' => $this->entryTypes,
                'elements' => $value,
            ]
        );
    }

    /**
     * Returns the sources that should be available to choose from within the field's settings
     *
     * @return array
     */
    protected function availableSources(): array
    {
        return Craft::$app->getElementIndexes()->getSources(static::elementType(), 'modal');
    }

    /**
     * @return array{sections:array,entryTypes:array}
     */
    public function getSectionMap(): array
    {
        $allSections = Craft::$app->getSections()->getAllSections();
        $map = [
            'sections' => [],
            'entryTypes' => [],
        ];
        $sections = [];
        $entryTypes = [];

        $singles = [];

        $sectionsService = Craft::$app->getSections();
        foreach ($allSections as $section) {
            if ($section->type === 'single') {
                $singles[] = $section;
                continue;
            }
            $sections[] = [
                'name' => $section->handle,
                'uid' => $section->uid,
                'label' => $section->name,
            ];

            $sectionId = $section->id;
            if (!$sectionId) {
                throw new \Exception('Invalid section selected');
            }
            $entryTypesForSection = $sectionsService->getEntryTypesBySectionId($sectionId);
            $entryTypes = array_merge($entryTypes, array_map(
                /**
                 * @param EntryType $entryType
                 * @return \stdClass
                 */
                function ($entryType) use ($section) {
                    return (object) [
                        'id' => $entryType->id,
                        'label' => $entryType->name,
                        'sectionUid' => $section->uid,
                        'active' => in_array($entryType->id, $this->entryTypes ?? []),
                    ];
                },
                $entryTypesForSection
            ));
        }
        $map['sections'] = $sections;
        $map['entryTypes'] = $entryTypes;

        return $map;
    }

    /**
     * @inheritdoc
     */
    protected static function elementType(): string
    {
        return Entry::class;
    }

    public function getSourceOptions(): array
    {
        return array_filter(
            parent::getSourceOptions(),
            /**
             * Remove singles from the available source options
             * @param array{label:string,value:string} $option
             * @return bool
             **/
            function ($option) {
                return $option['value'] !== 'singles';
            }
        );
    }

    public function beforeSave(bool $isNew): bool
    {
        $request = Craft::$app->request->getBodyParams();
        $this->sections = array_values($request['types'][self::class]['sources']);
        $entryTypes = $request['entryTypes'] ?? $request['types'][self::class]['entryTypes'];
        $this->entryTypes = array_values($entryTypes);

        return parent::beforeSave($isNew);
    }
}