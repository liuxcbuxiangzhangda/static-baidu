/**
 * Created by Administrator on 2017/7/6.
 */
window.onload=function () {
     nav=document.getElementsByClassName("nav");
     navLi=nav[0].getElementsByTagName("li");
     navContentLi=document.getElementsByClassName("navContent")[0].getElementsByTagName("li");
     /*导航*/
    bindNavHover();
    createClick();
};
/*创建navli的hover效果*/
function createNavHover(num){
    navLi[num].onmouseover=function () {
        this.style.cssText="background-color: #B3B6BB;color: #fff;font-weight:normal";
    };
    navLi[num].onmouseout=function () {
        this.style.cssText="background-color: #fff;color: #333;font-weight:normal";
    }
}
/*绑定navli的hover效果*/
function bindNavHover(){
    for(var k=1;k<navLi.length;k++){/*k不能从零取，因为默认的是第一个处于选中状态*/
        createNavHover(k);
    }

}

/*选中navli导航变化*/
function createClick(){
    navIndex=0;//表示当前选中的下标的下标 0表示选中的第一个
    for(var k=0;k<navLi.length;k++){
        navLi[k].index=k;
        navLi[k].onclick= function () {
            createNavHover(navIndex);//上次选中的取消了hover效果，现在恢复绑定
            this.onmouseout=null;//本次选中的导航取消hover效果
            this.onmouseover=null;
            navLi[navIndex].style.cssText="background-color: #fff;color: #333;font-weight:normal";
            this.style.cssText="background-color: #9A9DA2;color: #fff;font-weight:bolder"  ;
            navContentLi[navIndex].style.display="none";
            navContentLi[this.index].style.display="block";
            navIndex=this.index;
        }
    }
}

