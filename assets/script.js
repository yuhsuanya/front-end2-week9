import "babel-polyfill";
import $ from "jquery";
import gNews from './modules/gNews';
import { newsTemplate } from './modules/template';


const getSocialNews = async () => {
    try {
        let resp = await gNews("/everything?q=social",{
          headers:{
            Authorization:0755655e274647799acbf14048874587
          }
        });
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#socialNews").html(newsList);
  } catch (error){
    console.log(error);
  }
};

const getEntertainmentNews = async () => {
    try {
        let resp = await gNews("/everything?q=Entertainment",{
          headers:{
            Authorization:0755655e274647799acbf14048874587
          }
        });
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#entertainmentNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  const getSportNews = async () => {
    try {
        let resp = await gNews("/everything?q=Sport",{
          headers:{
            Authorization:0755655e274647799acbf14048874587
          }
        });
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("SportNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  const getTaiwanNews = async () => {
    try {
        let resp = await gNews("/everything?q=Taiwan",{
          headers:{
            Authorization:0755655e274647799acbf14048874587
          }
        });
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#TaiwanNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  getSocialNews()
  getEntertainmentNews()
  getSportNews()
  getTaiwanNews()

