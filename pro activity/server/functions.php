<?php
require "db_connection.php";
/**
 * Created by PhpStorm.
 * User: badsb
 * Date: 1/1/2019
 * Time: 5:08 PM
 */
function getCats(){
    global $con;
    $getCatQuery = "select * from categories";
    $getCatResult = mysqli_query($con,$getCatQuery);
    while ($row = mysqli_fetch_assoc($getCatResult))
    {
        $id = $row['cat_id'];
        $title = $row['cat_title'];
//        echo " <li><a class=\"nav-link\"  href=\"#\">$title</a></li>";
        echo "<option>$title</option>";
    }
}

function getBrands(){
    global $con;
    $getBrandQuery = "select * from brands";
    $getBrandResult = mysqli_query($con,$getBrandQuery);
    while ($row = mysqli_fetch_assoc($getBrandResult))
    {
        $id = $row['brand_id'];
        $title = $row['brand_title'];
//        echo " <li><a class=\"nav-link\"  href=\"#\">$title</a></li>";
        echo "<option>$title</option>";
    }
}