let currentPage = 0;
const pageSize = 4;
let statType = "clicks";
let currentLeaderboard = [];


function renderLeaderboardPage() {
    const tbody = document.querySelector("#leaderboard-table tbody");
    tbody.innerHTML = "";

    const start = currentPage * pageSize;
    const end = start + pageSize;
    const pageData = currentLeaderboard.slice(start, end);

    pageData.forEach((player, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${player.username}</td>
            <td>${(statType === "timePlayed" ? abrevTime(player.data) : player.data)}</td>
        `;

        tbody.appendChild(tr);
    });

    const totalPages = Math.ceil(currentLeaderboard.length / pageSize);
    document.getElementById("page-indicator").textContent =
        `Page ${currentPage + 1} / ${totalPages}`;
}

function setClickProcesses5() {
    document.getElementById("prev-page").onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            renderLeaderboardPage();
        }
    };

    document.getElementById("next-page").onclick = () => {
        const maxPage = Math.ceil(currentLeaderboard.length / pageSize) - 1;
        if (currentPage < maxPage) {
            currentPage++;
            renderLeaderboardPage();
        }
    };

    document.querySelectorAll(".lb-tab").forEach(btn => {
        btn.onclick = async () => {
            document.querySelectorAll(".lb-tab").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            statType = btn.dataset.type;

            // For now: same leaderboard
            currentLeaderboard = await buildLeaderboard(statType);
            currentPage = 0;
            renderLeaderboardPage();
        };
    });

    document.getElementById("refresh-lb").onclick = async () => {
        currentLeaderboard = await buildLeaderboard(statType);
        currentPage = 0;
        renderLeaderboardPage();
    };

    loadLeaderboardUI();
}


async function loadLeaderboardUI() {
    currentLeaderboard = await buildLeaderboard();
    currentPage = 0;
    renderLeaderboardPage();
}