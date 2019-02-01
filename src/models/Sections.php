<?php

namespace unionco\relatedentrytypes\models;

use craft\base\Model;

class Sections extends Model
{
    public $sections;

    public function __construct(array $sections)
    {
        $this->sections = $sections;
    }
}
