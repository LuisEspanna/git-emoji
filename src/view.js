const table = document.getElementById("table");
const txtMessage = document.getElementById("txtMessage");
const txtResult = document.getElementById("txtResult");
const currentEmojiView = document.getElementById("currentEmojiView");
var currentEmoji = null;

const emojies = [
    {text: "Initial commit", icon: "🎉", value: ":tada:"},
    {text: "Version tag", icon: "🔖", value: ":bookmark:"},
    {text: "New feature", icon: "✨", value: ":sparkles:"},
    {text: "Bugfix", icon: "🐛", value: ":bug:"},
    {text: "Metadata", icon: "📇", value: ":card_index:"},
    {text: "Documentation", icon: "📚", value: ":books:"},
    {text: "Documenting source code", icon: "💡", value: ":bulb:"},
    {text: "Performance", icon: "🐎", value: ":racehorse:"},
    {text: "Cosmetic", icon: "💄", value: ":lipstick:"},
    {text: "Tests", icon: "🚨", value: ":rotating_light:"},
    {text: "Adding a test", icon: "✅", value: ":white_check_mark:"},
    {text: "Make a test pass", icon: "✔", value: ":heavy_check_mark:"},
    {text: "General update", icon: "⚡", value: ":zap:"},
    {text: "Improve format/structure", icon: "🎨", value: ":art:"},
    {text: "Refactor code", icon: "🔨", value: ":hammer:"},
    {text: "Removing code/files", icon: "🔥", value: ":fire:"},
    {text: "Continuous Integration", icon: "💚", value: ":green_heart:"},
    {text: "Security", icon: "🔒", value: ":lock:"},
    {text: "Upgrading dependencies", icon: "⬆", value: ":arrow_up:"},
    {text: "Downgrading dependencies", icon: "⬇", value: ":arrow_down:"},
    {text: "Lint", icon: "👕", value: ":shirt:"},
    {text: "Translation", icon: "👽", value: ":alien:"},
    {text: "Text", icon: "📝", value: ":pencil:"},
    {text: "Deploying stuff", icon: "🚀", value: ":rocket:"},
    {text: "Fixing on MacOS", icon: "🍎", value: ":apple:"},
    {text: "Fixing on Linux", icon: "🐧", value: ":penguin:"},
    {text: "Fixing on Windows", icon: "🏁", value: ":checkered_flag:"},
    {text: "Work in progress", icon: "🚧", value: ":construction:"},
    {text: "Adding CI build system", icon: "👷", value: ":construction_worker:"},
    {text: "Analytics or tracking code", icon: "📈", value: ":chart_with_upwards_trend:"},
    {text: "Removing a dependency", icon: "➖", value: ":heavy_minus_sign:"},
    {text: "Adding a dependency", icon: "➕", value: ":heavy_plus_sign:"},
    {text: "Docker", icon: "🐳", value: ":whale:"},
    {text: "Configuration files", icon: "🔧", value: ""},
    {text: "Package.json in JS", icon: "📦", value: ""},
    {text: "Merging branches", icon: "🔀", value: ""},
    {text: "Bad code / need improv.", icon: "💩", value: ":hankey:"},
    {text: "Reverting changes", icon: "⏪", value: ":rewind:"},
    {text: "Breaking changes", icon: "💥", value: ":boom:"},
    {text: "Code review changes", icon: "👌", value: ":ok_hand:"},
    {text: "Accessibility", icon: "♿", value: ":wheelchair:"},
    {text: "Move/rename repository", icon: "🚚", value: ":truck:"}
];


(function fillTable(){
    
    //console.log(table);
    emojies.forEach((emoji, i) => {
        let tr = document.createElement("tr");
        let text = document.createElement("td");
        text.innerHTML = emoji.text;

        let icon = document.createElement("td");
        icon.innerHTML = emoji.icon;

        tr.appendChild(text);
        tr.appendChild(icon);

        tr.onclick = () => {
            currentEmoji = emoji;
            currentEmojiView.innerHTML = emoji.icon;
        };

        table.appendChild(tr);
    });
})();


function onBtnCopy(){  
    const copyText = `git commit -m "${currentEmoji ? (currentEmoji.value + " ") : ''}${txtMessage.value.length>0 ? txtMessage.value : ''}"`;
    navigator.clipboard.writeText(copyText);
    console.log(copyText);
}


function onBtnClear(){  
    if (txtMessage.value.length > 0){
        txtMessage.value = '';
        currentEmoji=null;
        txtResult.innerHTML = "";
    }
    
    currentEmojiView.innerHTML="";
}

function onMessageChange(){
    txtResult.innerHTML = (txtMessage.value);
}