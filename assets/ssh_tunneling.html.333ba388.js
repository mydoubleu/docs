import{e as s}from"./app.3826fdf0.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=s(`<h1 id="ssh-tunneling-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#ssh-tunneling-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> SSH tunneling \uC124\uC815</h1><h2 id="\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-ssh-key-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-ssh-key-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C SSH Key \uC0DD\uC131</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uC790\uB3D9 \uB85C\uADF8\uC778\uC744 \uC704\uD574 passphrase\uB294 \uC0DD\uB7B5</p><h2 id="\u1109\u1162\u11BC\u1109\u1165\u11BC\u1103\u116C\u11AB-public-key-ssh-id-rsa-pub-\u1105\u1173\u11AF-ssh-\u1109\u1165\u1107\u1165\u110B\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11BC\u1109\u1165\u11BC\u1103\u116C\u11AB-public-key-ssh-id-rsa-pub-\u1105\u1173\u11AF-ssh-\u1109\u1165\u1107\u1165\u110B\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" aria-hidden="true">#</a> \uC0DD\uC131\uB41C public key(<code>~/.ssh/id_rsa.pub</code>)\uB97C SSH \uC11C\uBC84\uC5D0 \uB4F1\uB85D</h2><p>\uC11C\uBC84\uC758 <code>~/.ssh/authorized_keys</code> \uD30C\uC77C\uC5D0 public key \uB0B4\uC6A9\uC744 \uCD94\uAC00</p><h2 id="\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173\u110B\u1166-\u1110\u1165\u1102\u1165\u11AF\u1105\u1175\u11BC-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173\u110B\u1166-\u1110\u1165\u1102\u1165\u11AF\u1105\u1175\u11BC-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uD130\uB110\uB9C1 \uC11C\uBE44\uC2A4 \uC0DD\uC131</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/systemd/system/tunneling.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=Tunneling
After=syslog.target network.target

[Service]
ExecStart=/usr/bin/ssh [USER]@[SSH SERVER] -p [SSH PORT] -N -R [SSH SERVER]:[REMOTE PORT]:[DESTINATION]:[DESTINATION PORT]

Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9);function r(i,l){return a}var p=e(n,[["render",r]]);export{p as default};