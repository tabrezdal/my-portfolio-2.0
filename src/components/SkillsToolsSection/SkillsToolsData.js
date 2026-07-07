import ImageHelper from "../../Helpers/ImageHelper";

const SkillsToolsData = {
  label: 'Skills & Tools',
  headline: 'What I work with.',
  cursiveLabel: 'my tech stack',

  categories: [
    {
      id: 'engineering',
      title: 'Engineering Stack',
      items: [
        // FROM TechnologiesSectionData — FeatureTech
        { id: 'react', name: 'React', icon: ImageHelper.ReactIcon },
        { id: 'redux', name: 'Redux', icon: ImageHelper.ReduxIcon },
        { id: 'graphql', name: 'Graph QL', icon: ImageHelper.GraphQLIcon },
        { id: 'nodejs', name: 'Node Js', icon: ImageHelper.NodeJsIcon },
        { id: 'chatgpt', name: 'ChatGPT', icon: ImageHelper.ChatGPTIcon },
        // FROM TechnologiesSectionData — NormalTech
        { id: 'html5', name: 'HTML5', icon: ImageHelper.HtmlIcon },
        { id: 'css3', name: 'CSS3', icon: ImageHelper.CssIcon },
        { id: 'sass', name: 'Sass', icon: ImageHelper.SaasIcon },
        { id: 'less', name: 'Less', icon: ImageHelper.LessIcon },
        { id: 'materialui', name: 'Material UI', icon: ImageHelper.MuiIcon },
        { id: 'bootstrap', name: 'Bootstrap', icon: ImageHelper.BootstrapIcon },
        { id: 'mysql', name: 'MySQL', icon: ImageHelper.MySqlIcon },
        { id: 'json', name: 'JSON', icon: ImageHelper.JsonIcon },
        { id: 'javascript', name: 'JavaScript', icon: ImageHelper.JavaScriptIcon },
        { id: 'typescript', name: 'Typescript', icon: ImageHelper.TypescriptIcon },
        { id: 'axios', name: 'Axio', icon: ImageHelper.AxiosIcon },
        { id: 'jquery', name: 'Jquery', icon: ImageHelper.JqueryIcon },
      ],
    },
    {
      id: 'tools',
      title: 'Design Tools',
      items: [
        // FROM ToolsSectionData — all tool items
        { id: 'vscode', name: 'VS Code', icon: ImageHelper.VisualStudioLogo },
        { id: 'git', name: 'Git Version Control', icon: ImageHelper.GithubLogo },
        { id: 'figma', name: 'Figma', icon: ImageHelper.FigmaLogo },
        { id: 'adobexd', name: 'Adobe XD', icon: ImageHelper.AdobeXdLogo },
        { id: 'illustrator', name: 'Adobe Illustrator', icon: ImageHelper.IllustratorLogo },
        { id: 'photoshop', name: 'Adobe Photoshop', icon: ImageHelper.PhotoshopLogo },
      ],
    },
  ],
};

export default SkillsToolsData;
