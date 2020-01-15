<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 12.01.2020
 * Time: 21:04
 */

namespace App\Traits;


trait Logging
{
    private $model;
    private $logItem = 'logging';

    public function getLogItem() {
        return $this->logItem;
    }

    public function setLog() {

    }
}
