<?php

namespace App\Http\Services;

class TranslitService
{
    private $lang = [
        'ua' => 'langUa',
        'ru' => 'langRu',
    ];

    public function translate(string $value, string $lang): string
    {
        $convert_str = $this->getLang($lang);

        $value = mb_strtolower($value);
        $value = strtr($value, $convert_str);
        $value = mb_ereg_replace('[^-0-9a-z\.]', '-', $value);
        $value = mb_ereg_replace('[-]+', '-', $value);
        $value = trim($value, '-');

        return $value;
    }

    public function getLang(string $lang): array
    {
        return $this->{$this->lang[$lang]}();
    }

    public function langRu(): array
    {
        return [
            'ж' => 'zh',
            'ч' => 'ch',
            'щ' => 'shh',
            'ш' => 'sh',
            'ю' => 'yu',
            'ё' => 'yo',
            'я' => 'ya',
            'э' => 'e',
            'а' => 'a',
            'б' => 'b',
            'в' => 'v',
            'г' => 'g',
            'д' => 'd',
            'е' => 'e',
            'з' => 'z',
            'и' => 'i',
            'й' => 'y',
            'к' => 'k',
            'л' => 'l',
            'м' => 'm',
            'н' => 'n',
            'о' => 'o',
            'п' => 'p',
            'р' => 'r',
            'с' => 's',
            'т' => 't',
            'у' => 'u',
            'ф' => 'f',
            'х' => 'h',
            'ц' => 'c',
            'ъ' => '',
            'ь' => '',
            'ы' => 'i',

            'Ж' => 'Zh',
            'Ч' => 'Ch',
            'Щ' => 'Shh',
            'Ш' => 'Sh',
            'Ю' => 'Yu',
            'Ё' => 'Yo',
            'Я' => 'Ya',
            'Э' => 'E',
            'А' => 'A',
            'Б' => 'B',
            'В' => 'V',
            'Г' => 'G',
            'Д' => 'D',
            'Е' => 'E',
            'З' => 'Z',
            'И' => 'I',
            'Й' => 'Y',
            'К' => 'K',
            'Л' => 'L',
            'М' => 'M',
            'Н' => 'N',
            'О' => 'O',
            'П' => 'P',
            'Р' => 'R',
            'С' => 'S',
            'Т' => 'T',
            'У' => 'U',
            'Ф' => 'F',
            'Х' => 'H',
            'Ц' => 'C',
            'Ъ' => '',
            'Ь' => '',
            'Ы' => 'I',
        ];
    }

    public function langUa(): array {
        return [
            'ж' => 'zh',
            'ч' => 'ch',
            'щ' => 'shch',
            'ш' => 'sh',
            'ю' => 'iu',
            'є' => 'ie',
            'я' => 'ya',
            'а' => 'a',
            'б' => 'b',
            'в' => 'v',
            'г' => 'h',
            'ґ' => 'g',
            'д' => 'd',
            'е' => 'e',
            'з' => 'z',
            'и' => 'y',
            'і' => 'i',
            'ї' => 'i',
            'й' => 'i',
            'к' => 'k',
            'л' => 'l',
            'м' => 'm',
            'н' => 'n',
            'о' => 'o',
            'п' => 'p',
            'р' => 'r',
            'с' => 's',
            'т' => 't',
            'у' => 'u',
            'ф' => 'f',
            'х' => 'kh',
            'ц' => 'ts',
            'ь' => '',

            'Ж' => 'Zh',
            'Ч' => 'Ch',
            'Щ' => 'Shch',
            'Ш' => 'Sh',
            'Ю' => 'Yu',
            'Є' => 'Ye',
            'Я' => 'Ya',
            'А' => 'A',
            'Б' => 'B',
            'В' => 'V',
            'Г' => 'H',
            'Ґ' => 'G',
            'Д' => 'D',
            'Е' => 'E',
            'З' => 'Z',
            'И' => 'Y',
            'І' => 'I',
            'Ї' => 'Yi',
            'Й' => 'Y',
            'К' => 'K',
            'Л' => 'L',
            'М' => 'M',
            'Н' => 'N',
            'О' => 'O',
            'П' => 'P',
            'Р' => 'R',
            'С' => 'S',
            'Т' => 'T',
            'У' => 'U',
            'Ф' => 'F',
            'Х' => 'Kh',
            'Ц' => 'Ts',
            'Ь' => '',

            '’' => '',
        ];
    }
}
