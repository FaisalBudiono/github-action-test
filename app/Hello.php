<?php

namespace App;

class Hello
{
    public static function say(string $name = "")
    {
        return empty($name)
            ? self::sayToStranger()
            : "Hello {$name}";
    }

    private static function sayToStranger()
    {
        return "Hello Stranger... but who are you";
    }
}
