export default {
    name: "bs_2979_alt",
    description: "British Standard 2979:1958 transliteration schema",
    url: "https://dangry.ru/iuliia/bs-2979/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: '"',
        ы: "y",
        ь: "'",
        э: "e",
        ю: "yu",
        я: "ya",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: { ий: "y", ый: "y" },
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Yuliya, s\"esh' eshche etikh myagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chayu",
        ],
    ],
};
