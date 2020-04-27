export default {
    name: "ala_lc",
    description: "ALA-LC transliteration schema.",
    url: "https://dangry.ru/iuliia/ala-lc/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "ё",
        ж: "zh",
        з: "z",
        и: "i",
        й: "ĭ",
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
        ц: "t͡s",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "ʺ",
        ы: "y",
        ь: "ʹ",
        э: "ė",
        ю: "i͡u",
        я: "i͡a",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: null,
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "I͡ulii͡a, sʺeshʹ eshchё ėtikh mi͡agkikh frant͡suzskikh bulok iz Ĭoshkar-Oly, da vypeĭ altaĭskogo chai͡u",
        ],
    ],
};
