<?php
/**
 * Created by PhpStorm.
 * User: badsb
 * Date: 1/1/2019
 * Time: 5:06 PM
 */
$con = mysqli_connect("localhost","root","","techboxdb");
if(!$con)
{
    die("Connection Failed");
}