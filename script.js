let score = 1;

function next(correct) {
  if (correct) score++;

  if (score === 4) {
    document.body.innerHTML = `
      <div class="card">
        <h2>Will you be my Valentine? 💘</h2>
        <button onclick="yes()">Yes ❤️</button>
        <button>No 😌</button>
      </div>
    `;
  } else {
    document.getElementById("score").innerText = `Score: ${score}/4`;
    document.getElementById("question").innerText =
      "Do you know how special you are to me?";
  }
}

function yes() {
  document.body.innerHTML = `
    <div class="card">
      <h2>🎉 Yay! You're My Valentine! 🎉</h2>
      <p>Thank you for making my day special ❤️</p>
    </div>
  `;
}
