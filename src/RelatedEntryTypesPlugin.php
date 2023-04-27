<?php
/**
 * Related Entry Types plugin for Craft CMS 3.x
 *
 * A Craft Field type that allows more control over related entries.
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\relatedentrytypes;

use Craft;

use yii\base\Event;
use craft\base\Plugin;
use craft\web\UrlManager;
use craft\services\Fields;
use craft\services\Plugins;
use craft\events\PluginEvent;

use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterComponentTypesEvent;
use unionco\relatedentrytypes\fields\RelatedEntryTypesField;
use unionco\relatedentrytypes\twigextensions\RelatedEntryTypesTwigExtension;

/**
 * Class RelatedEntryTypesPlugin
 *
 * @author    Abry Rath <abry.rath@union.co>
 * @package   RelatedEntryTypes
 * @since     0.0.1
 *
 */
class RelatedEntryTypesPlugin extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var RelatedEntryTypesPlugin
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public string $schemaVersion = '0.0.1';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     * @return void
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        Craft::setAlias('@relatedentrytypes', $this->getBasePath());

        $this->controllerNamespace = 'unionco\relatedentrytypes\controllers';

        Craft::$app->view->registerTwigExtension(new RelatedEntryTypesTwigExtension());

        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            /**
             * @return void
             */
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = RelatedEntryTypesField::class;
            }
        );

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            /**
             * @return void
             */
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                }
            }
        );

        // Event::on(
        //     UrlManager::class,
        //     UrlManager::EVENT_REGISTER_CP_URL_RULES,
        //     /**
        //      * @return void
        //      */
        //     function (RegisterUrlRulesEvent $event) {
        //         $event->rules['related-entry-types/types'] = 'related-entry-types/default/types';
        //     }
        // );

        Craft::info(
            Craft::t(
                'related-entry-types',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
}
