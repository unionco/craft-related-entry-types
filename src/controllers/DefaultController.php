<?php

namespace unionco\relatedentrytypes\controllers;

use Craft;
use craft\web\Controller;

class DefaultController extends Controller
{
    // public $allowAnonymous = ['types'];
    // public $enableCsrfValidation = false;

    // public function actionTypes()
    // {
    //     $this->requirePostRequest();
    //     $rawBody = Craft::$app->request->getRawBody();
    //     $reqBody = \json_decode($rawBody);

    //     $sectionUids = $reqBody->sectionUids;
    //     $selectedEntryTypeIds = $reqBody->entryTypes ?? [];

    //     if (count($sectionUids) < 1) {
    //         return '';
    //     }

    //     $sections = null;
    //     if (count($sectionUids) == 1 && $sectionUids[0] == '*') {
    //         $sections = Craft::$app->getSections()->getAllSections();
    //     } else {
    //         $sections = array_map(function ($sectionUid) {
    //             $uid = preg_replace('/section:/', '', $sectionUid);
    //             return Craft::$app->getSections()->getSectionByUid($uid);
    //         }, $sectionUids);
    //     }

    //     $selectedEntryTypes = [];
    //     if (count($selectedEntryTypes)) {
    //         $selectedEntryTypes = array_map(function ($selectedEntryTypeId) {
    //             $entryType = Craft::$app->getSections()->getEntryTypeById($selectedEntryTypeId);
    //             return [
    //                 'value' => $entryType->id,
    //                 'id' => $entryType->id,
    //                 'label' => $entryType->name,
    //             ];
    //         }, $selectedEntryTypeIds);
    //     }

    //     return $this->renderTemplate(
    //         'related-entry-types/_partials/EntryType_types',
    //         [
    //             'sections' => $sections,
    //             'types' => $selectedEntryTypes,
    //             'values' => $selectedEntryTypeIds,
    //         ]
    //     );
    // }
}
