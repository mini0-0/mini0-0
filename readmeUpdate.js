import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `<h1 align="center"> This is Mini's GitHub👋 </h1>

<h2 align="center"> 🖥️ Tech Stacks 🖥️ </h2>
<h3 align="center">Tools</h3>
 <div align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white">
  <img src="https://img.shields.io/badge/SQL-368CCB?style=flat-square&logo=SQL&logoColor=white">
  <img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white"> 

 </div>

 <div align="center">
   <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white">
   <img src="https://img.shields.io/badge/MySql-4479A1?style=fflat-square&logo=mysql&logoColor=white"> 
   <img src="https://img.shields.io/badge/Sqlite-003B57?style=fflat-square&logo=sqlite&logoColor=white"> 
   <img src="https://img.shields.io/badge/AmazonEC2-FF9900.svg?style=flat-square&logo=amazonec2&logoColor=white"/>
 </div>

 <div align="center">
   <img src="https://img.shields.io/badge/Jupyter-F37626.svg?style=flat-square&logo=jupyter&logoColor=white"/>
  <img src="https://img.shields.io/badge/GoogleColab-F9AB00.svg?style=flat-square&logo=googlecolabr&logoColor=white"/>
   <img src="https://img.shields.io/badge/Intellijidea-000000.svg?style=flat-square&logo=intellijidea&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyCharm-000000.svg?style=flat-square&logo=pycharm&logoColor=white"/>
 </div>

 <div align="center">
   <img src="https://img.shields.io/badge/pandas-150458.svg?style=flat-square&logo=pandas&logoColor=white"/>
   <img src="https://img.shields.io/badge/numpy-013243.svg?style=flat-square&logo=numpy&logoColor=white"/>
   <img src="https://img.shields.io/badge/scikitlearn-F7931E.svg?style=flat-square&logo=scikitlearn&logoColor=white"/>
   <img src="https://img.shields.io/badge/tensorflow-FF6F00.svg?style=flat-square&logo=tensorflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/pytorch-EE4C2C.svg?style=flat-square&logo=pytorch&logoColor=white"/>
 </div>
 
<h3 align="center">Team Tools</h3>
<div align="center">
 <img src="https://img.shields.io/badge/git-%23F05033.svg?style=flat-square&logo=git&logoColor=white"/> 
 <img src="https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white"/>  
 <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white"/> 
 <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=flat-square&logo=notion&logoColor=white"/>
 </div>
<br>

<h2 align="center"> 📝GitHub Status </h2>
<div align="center">

 [![Solved.ac 프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=nalala8200)](https://solved.ac/nalala8200)   

  <a href="s">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mini0-0&exclude_repo=dkssud8150.github.io&layout=compact&theme=tokyonight" />
</a>
 <a href="s">
   <img src="https://github-readme-stats.vercel.app/api?username=mini0-0&theme=tokyonight&show_icons=true" width="42%" />
 </a>
</div>


<h2 align="center">  📕 Latest Blog Posts </h2>
<div align="center">

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://rose-brown.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const { title, link } = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
