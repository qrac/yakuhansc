# Yaku Han SC

## About

Yaku Han SC 是一种“专用半角专用 Web 字体”，它将 Web 上中文（简体）文本中包含的标点符号减半。

## Detail

字体家族（CSS）后备功能用于优先调整“近似字体”的字体并调整字符宽度。 除了与旧版浏览器兼容外，它还适用于动态内容，并且一种字体的轻量级特征为 4-5KB。

## How To Use

加载调用字体的 CSS 文件，并将字体名称添加到字体系列的开头。 \*以下是使用`YakuHanSC`的示例（哥特式約物一部）

```html
<link rel="stylesheet" href="dist/css/yakuhansc.min.css" />
```

```scss
.example {
  font-family: YakuHanSC, "Hiragino Sans" sans-serif;
}
```

## Font Family

|  字体名称   |  风格  | 半角目标 | 理解字符 |
| :---------: | :----: | :------: | -------- |
| `YakuHanSC` | 哥特式 | 約物一部 | `，。`   |

## Font Weight

|  字体名称   | W100 | W200  |   W300    |  W400   |  W500  | W600 | W700 | W800 | W900  |
| :---------: | :--: | :---: | :-------: | :-----: | :----: | :--: | :--: | :--: | :---: |
| `YakuHanSC` | Thin | Light | DemiLight | Regular | Medium |  -   | Bold |  -   | Black |

## CDN

- https://cdn.jsdelivr.net/npm/yakuhansc/

通过将链接写入 jsDelivr 以 HTML 格式发布的 CSS 文件的链接，可以简单地使用所有粗字体。

| フォント名  | HTML に貼る CDN リンクタグ                                                                               |
| :---------: | -------------------------------------------------------------------------------------------------------- |
| `YakuHanSC` | `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhansc@1.0.9/dist/css/yakuhansc.min.css">` |

## npm

- https://www.npmjs.com/package/yakuhansc

可以使用 npm 命令将其安装在任何项目中。

```
npm install yakuhansc
```

### SCSS

在 `npm install` 之后，导入 YakuHanSC 的 SCSS 文件以与任何 SCSS 文件一起使用。 通过覆盖变量，可以直接从 CSS 链接到 CDN 字体文件，也可以省略 EOT 格式。

```scss
$yakuhansc-eot-use: false;
$yakuhansc-cdn-use: true;

@import "yakuhansc/src/scss/yakuhansc.scss";
```

## Support

| Chrome | Firefox | IE  | Ege | Opera | Safari(Mac) |
| :----: | :-----: | :-: | :-: | :---: | :---------: |
|  55~   |   50~   | 9~  | 14~ |  36~  |     6~      |

| Safari(iOS) | Chrome(Android) | Browser(Android) |
| :---------: | :-------------: | :--------------: |
|     7~      |       51~       |       4.4~       |

## License

- Yaku Han JP : SIL OFL 1.1
- Gothic fonts : Based on [Noto Sans CJK SC](https://www.google.com/get/noto/help/cjk/) licensed under the SIL OFL 1.1

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
