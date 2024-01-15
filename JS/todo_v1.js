import "./styles.css";

document.getElementById("app").innerHTML = `
`;

const onClickAdd = () => {
  // get a value from textbox and delete it
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = null;

  // getnerate li
  const li = document.createElement("li");

  // generate div
  const div = document.createElement("div");
  div.className = "list-low";

  // generate p
  const p = document.createElement("p");
  p.className = "one-todo";
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // 未完了リストに追加
  document.getElementById("incomplete-area").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
