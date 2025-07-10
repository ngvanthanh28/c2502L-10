document.getElementById("btn").addEventListener("click" , () => {
    const li = document.createElement("li");
    li.textContent = "";

    const btnnew = document.createElement("button");
    btnnew.textContent = "remove";

    btnnew.addEventListener("click" , () =>{
        li.remove();
    }
    )
    li.appendChild(btnnew);

    document.getElementById("list").appendChild(li);
}
)