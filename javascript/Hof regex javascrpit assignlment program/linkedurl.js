//program to match linkedIn Url
const pattern=/(https)?:\/\/(www.linkedin.com\/in\/)[a-z0-9-_\/]*[a-z0-9]/g;
const string="https: ww.  isnj https://www.linkedin.com/in/glsg sk dkhttpsk l";
function pattermatch(string){
    if(string.match(pattern))
    console.log("matched");
    else
    console.log("not match");
}
pattermatch(string);