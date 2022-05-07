import{e as n}from"./app.3826fdf0.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="tomcat-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#tomcat-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> Tomcat \uC124\uCE58</h1><h2 id="\u1109\u1165\u11AF\u110E\u1175-\u1106\u1175\u11BE-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110E\u1175-\u1106\u1175\u11BE-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uCE58 \uBC0F \uC124\uC815</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> -m -U -d /opt/tomcat -s /bin/false tomcat
<span class="token builtin class-name">cd</span> /opt/tomcat
<span class="token function">wget</span> --no-check-certificate https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.58/bin/apache-tomcat-9.0.58.tar.gz
<span class="token function">tar</span> -zxvf apache-tomcat-9.0.58.tar.gz
<span class="token function">ln</span> -s apache-tomcat-9.0.58 latest
<span class="token function">chown</span> -R tomcat:tomcat /opt/tomcat
<span class="token function">vi</span> /etc/systemd/system/tomcat.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Systemd unit file for tomcat
[Unit]
Description=Apache Tomcat Web Application Container
After=syslog.target network.target

[Service]
Type=forking

User=tomcat
Group=tomcat

WorkingDirectory=/opt/tomcat/latest

#Environment=JAVA_opt=/usr/jre
Environment=&quot;JAVA_OPTS=-Djava.security.egd=file:/dev/./urandom&quot;
Environment=CATALINA_BASE=/opt/tomcat/latest
Environment=CATALINA_HOME=/opt/tomcat/latest
Environment=CATALINA_PID=/opt/tomcat/latest/temp/tomcat.pid
Environment=&#39;CATALINA_OPTS=-server -Xms1024M -Xmx1024M -XX:NewRatio=2&#39;

ExecStart=/opt/tomcat/latest/bin/startup.sh
ExecStop=/opt/tomcat/latest/bin/shutdown.sh

UMask=0007
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> tomcat
systemctl start tomcat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uD504\uB85D\uC2DC \uC124\uC815</h2><p>\uD504\uB85D\uC2DC \uD639\uC740 \uB85C\uB4DC\uBC38\uB7F0\uC11C\uAC00 \uC788\uB294 \uACBD\uC6B0 server.xml\uC758 Engine &gt; Host \uC544\uB798\uC5D0 \uB2E4\uC74C \uCD94\uAC00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Valve className=&quot;org.apache.catalina.valves.RemoteIpValve&quot;
            internalProxies=&quot;192\\.168\\.0\\.10|192\\.168\\.0\\.11&quot;
            remoteIpHeader=&quot;x-forwarded-for&quot;
            proxiesHeader=&quot;x-forwarded-by&quot;
            protocolHeader=&quot;x-forwarded-proto&quot; /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u1107\u1161\u11BC\u1112\u116A\u1107\u1167\u11A8-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11BC\u1112\u116A\u1107\u1167\u11A8-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uBC29\uD654\uBCBD \uC124\uC815</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,10);function t(r,l){return e}var i=a(s,[["render",t]]);export{i as default};
