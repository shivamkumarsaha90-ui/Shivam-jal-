function orderNow() {
    let qty = prompt("Kitne 20L Water Jar chahiye?");

    if (!qty) return;

    let msg =
`Namaste Shivam Jal,

Mujhe ${qty} × 20L Water Jar order karna hai.

Naam:
Mobile:
Address:`;

    window.open(
        "https://wa.me/917250746343?text=" + encodeURIComponent(msg),
        "_blank"
    );
}
