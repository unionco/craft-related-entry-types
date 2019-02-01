<?php

namespace unionco\relatedentrytypes\models;

use craft\base\Model;

class EntryTypes extends Model
{
    public $entryTypes;

    public function __construct(array $entryTypes)
    {
        $this->entryTypes = $entryTypes;
    }
}
