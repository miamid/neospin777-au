# License Badges

Набор SVG иконок лицензий для казино сайтов.

## Доступные лицензии

1. **curacao.svg** - Curaçao Gaming License
2. **anjouan.svg** - Anjouan Gaming License
3. **kahnawake.svg** - Kahnawake Gaming Commission
4. **malta.svg** - Malta Gaming Authority (MGA)
5. **gibraltar.svg** - Gibraltar Gambling Commission
6. **ukgc.svg** - UK Gambling Commission
7. **18plus.svg** - 18+ Adults Only Badge

## Использование

В футере сайта лицензии добавляются автоматически. По умолчанию используются:
- Curaçao
- 18+

### Настройка в config.json

Чтобы использовать другие лицензии, добавьте в `config.json`:

```json
{
  "footer": {
    "licenses": ["curacao", "malta", "18plus", "ukgc"]
  }
}
```

### Доступные значения

- `curacao` - Кюрасао
- `anjouan` - Анжуан
- `kahnawake` - Кахнаваке
- `malta` - Мальта (MGA)
- `gibraltar` - Гибралтар
- `ukgc` - UK Gambling Commission
- `18plus` - 18+ знак

## Размер

Все иконки имеют размер 80x80 пикселей и белую цветовую схему для универсального использования на темных фонах.
