<?php
$x1 = htmlspecialchars($_GET["x1"]);
$x2 = htmlspecialchars($_GET["x2"]);
$x3 = htmlspecialchars($_GET["x3"]);

$y1 = htmlspecialchars($_GET["y1"]);
$y2 = htmlspecialchars($_GET["y2"]);
$y3 = htmlspecialchars($_GET["y3"]);
echo '(', $x1, '; ', $x2, '; ', $x3, ')', '*', '(', $y1, '; ', $y2, '; ', $y3, ')', '=', $x1 * $y1 + $x2 * $y2 + $x3 * $y3 ;
?>