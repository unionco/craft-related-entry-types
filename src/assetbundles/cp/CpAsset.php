<?php

/**
 * Related Entry Types plugin for Craft CMS 3.x
 *
 * A Craft Field type that allows more control over related entries.
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\relatedentrytypes\assetbundles\cp;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset as DefaultCpAsset;
use craft\web\assets\vue\VueAsset;
use unionco\relatedentrytypes\RelatedEntryTypesPlugin;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   RelatedEntryTypes
 * @since     0.0.1
 */
class CpAsset extends AssetBundle
{
    public function init()
    {
        $dev = getenv('RET_ENABLE_DEV') === 'true';

        $this->sourcePath = RelatedEntryTypesPlugin::getInstance()->getBasePath() . '/assetbundles/cp/dist/';
        $this->depends = [
            DefaultCpAsset::class,
        ];

        if ($dev) {
            $this->js = [
                'https://vuejs.org/js/vue.js',
                'http://localhost:8080/app.js',
            ];
        } else {
            $this->depends[] = VueAsset::class;
            $this->css = ['css/app.css',];
            $this->js = ['js/chunk-vendors.js', 'js/app.js',];
        }
        parent::init();
    }
}
