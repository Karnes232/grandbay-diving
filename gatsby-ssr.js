const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [

  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-6MJLJ90SSM"></script>, <script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-482060503"></script>
]



exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)

}