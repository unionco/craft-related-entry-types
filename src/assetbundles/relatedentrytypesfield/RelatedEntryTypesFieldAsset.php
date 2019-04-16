<?php
/**
 * Related Entry Types plugin for Craft CMS 3.x
 *
 * A Craft Field type that allows more control over related entries.
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\relatedentrytypes\assetbundles\relatedentrytypesfield;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   RelatedEntryTypes
 * @since     0.0.1
 */
class RelatedEntryTypesFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     * @return void
     */
    public function init()
    {
        $this->sourcePath = "@unionco/relatedentrytypes/assetbundles/relatedentrytypesfield/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/vendor.main.js',
            'js/main.js',
        ];

        $this->css = [
            'css/main.css',
        ];

        parent::init();
    }
}
