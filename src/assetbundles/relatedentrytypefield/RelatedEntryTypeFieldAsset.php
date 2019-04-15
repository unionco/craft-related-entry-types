<?php
/**
 * Related Entry Types plugin for Craft CMS 3.x
 *
 * A Craft Field type that allows more control over related entries.
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\relatedentrytypes\assetbundles\entrytypefield;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   RelatedEntryTypes
 * @since     0.0.1
 */
class RelatedEntryTypeFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@unionco/relatedentrytypes/assetbundles/relatedentrytypefield/dist";

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
