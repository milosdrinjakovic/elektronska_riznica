<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<title>/plugins/i18n.js - zaporodicu.org - БИТЛАБ развој</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Redmine" />
<meta name="keywords" content="issue,bug,tracker" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="OrPYlsJssSTAgIkm8b9al0zo2TiiM/yFH2SeoocyBwy2ztD9lDjdSk+yslKYvcYgavct3j3AfYCvsRrgpOQtCg==" />
<link rel='shortcut icon' href='/favicon.ico?1633834840' />
<link rel="stylesheet" media="all" href="/stylesheets/jquery/jquery-ui-1.12.1.css?1633834840" />
<link rel="stylesheet" media="all" href="/stylesheets/tribute-5.1.3.css?1633834840" />
<link rel="stylesheet" media="all" href="/stylesheets/application.css?1633834840" />
<link rel="stylesheet" media="all" href="/stylesheets/responsive.css?1633834840" />

<script src="/javascripts/jquery-3.5.1-ui-1.12.1-ujs-5.2.4.5.js?1633834840"></script>
<script src="/javascripts/jquery-migrate-3.3.2.min.js?1633834840"></script>
<script src="/javascripts/tribute-5.1.3.min.js?1633834840"></script>
<script src="/javascripts/tablesort-5.2.1.min.js?1633834840"></script>
<script src="/javascripts/tablesort-5.2.1.number.min.js?1633834840"></script>
<script src="/javascripts/application.js?1633834840"></script>
<script src="/javascripts/responsive.js?1633834840"></script>
<script>
//<![CDATA[
$(window).on('load', function(){ warnLeavingUnsaved('The current page contains unsaved text that will be lost if you leave this page.'); });
//]]>
</script>

<script>
//<![CDATA[
rm = window.rm || {};rm.AutoComplete = rm.AutoComplete || {};rm.AutoComplete.dataSources = '{"issues":"/issues/auto_complete?project_id=zaporodicu-org\u0026q=","wiki_pages":"/wiki_pages/auto_complete?project_id=zaporodicu-org\u0026q="}';
//]]>
</script>
<link rel="stylesheet" media="screen" href="/plugin_assets/redmine_agile/stylesheets/redmine_agile.css?1640266913" />  <link rel="stylesheet" media="screen" href="/plugin_assets/redmine_crm/stylesheets/money.css?1640262803" /> <link rel="stylesheet" media="screen" href="/plugin_assets/redmine_contacts_helpdesk/stylesheets/helpdesk.css?1659677429" /> <script src="/plugin_assets/redmine_checklists/javascripts/checklists.js?1640266913"></script><link rel="stylesheet" media="screen" href="/plugin_assets/redmine_checklists/stylesheets/checklists.css?1640266913" />
<!-- page specific tags -->
  <script src="/javascripts/repository_navigation.js?1633834840"></script>
<link rel="stylesheet" media="screen" href="/stylesheets/scm.css?1633834840" />
  <script src="/plugin_assets/redmine_crm/javascripts/select2.js?1640262803"></script><link rel="stylesheet" media="screen" href="/plugin_assets/redmine_crm/stylesheets/select2.css?1640262803" /><script src="/plugin_assets/redmine_crm/javascripts/select2_helpers.js?1640262803"></script>
  <link rel="stylesheet" media="screen" href="/plugin_assets/redmine_contacts/stylesheets/contacts.css?1659677428" />
  <!-- <PRO> -->
  <script src="/plugin_assets/redmine_contacts/javascripts/contacts.js?1659677428"></script>
  <!-- </PRO> -->
</head>
<body class="project-zaporodicu-org has-main-menu controller-repositories action-entry avatars-off">

<div id="wrapper">

<div class="flyout-menu js-flyout-menu">

        <div class="flyout-menu__search">
            <form action="/projects/zaporodicu-org/search" accept-charset="UTF-8" name="form-4bd15d91" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
            <input type="hidden" name="changesets" value="1" />
            <label class="search-magnifier search-magnifier--flyout" for="flyout-search">&#9906;</label>
            <input type="text" name="q" id="flyout-search" class="small js-search-input" placeholder="Search" />
</form>        </div>

        <div class="flyout-menu__avatar flyout-menu__avatar--no-avatar">
            <a class="user active" href="/users/11">bjovkovic</a>
        </div>

        <h3>Project</h3>
        <span class="js-project-menu"></span>

    <h3>General</h3>
    <span class="js-general-menu"></span>

    <span class="js-sidebar flyout-menu__sidebar"></span>

    <h3>Profile</h3>
    <span class="js-profile-menu"></span>

</div>

<div id="wrapper2">
<div id="wrapper3">
<div id="top-menu">
    <div id="account">
        <ul><li><a class="my-account" href="/my/account">My account</a></li><li><a class="logout" rel="nofollow" data-method="post" href="/logout">Sign out</a></li></ul>    </div>
    <div id="loggedas">Logged in as <a class="user active" href="/users/11">bjovkovic</a></div>
    <ul><li><a class="home" href="/">Home</a></li><li><a class="my-page" href="/my/page">My page</a></li><li><a class="projects" href="/projects">Projects</a></li><li><a class="contacts" href="/contacts">Contacts</a></li><li><a class="deals" href="/deals">Deals</a></li><li><a class="help" href="https://www.redmine.org/guide">Help</a></li></ul></div>

<div id="header">

    <a href="#" class="mobile-toggle-button js-flyout-menu-toggle-button"></a>

    <div id="quick-search">
        <form action="/projects/zaporodicu-org/search" accept-charset="UTF-8" name="form-97427ba2" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="scope" value="subprojects" />
        <input type="hidden" name="changesets" value="1" />
        <label for='q'>
          <a accesskey="4" href="/projects/zaporodicu-org/search?scope=subprojects">Search</a>:
        </label>
        <input type="text" name="q" id="q" size="20" class="small" accesskey="f" data-auto-complete="true" />
</form>        <div id="project-jump" class="drdn"><span class="drdn-trigger">zaporodicu.org</span><div class="drdn-content"><div class="quick-search"><input type="text" name="q" id="projects-quick-search" value="" class="autocomplete" data-automcomplete-url="/projects/autocomplete.js?jump=repository" autocomplete="off" /></div><div class="drdn-items projects selection"><strong>Bookmarks</strong><a title="edu.bitlab.rs" href="/projects/edu-bitlab-rs?jump=repository"><span style="padding-left:0px;">edu.bitlab.rs</span></a><strong>Recently used</strong><a title="zaporodicu.org" class="selected" href="/projects/zaporodicu-org?jump=repository"><span style="padding-left:0px;">zaporodicu.org</span></a><a title="Електронска ризница" href="/projects/elektronska-riznica?jump=repository"><span style="padding-left:0px;">Електронска ризница</span></a><a title="node.js сервер" href="/projects/node-js-server?jump=repository"><span style="padding-left:0px;">node.js сервер</span></a><strong>All Projects</strong><a title=" fondacijanovanada.rs.sr" href="/projects/fondacijanovanada-rs-sr?jump=repository"><span style="padding-left:0px;"> fondacijanovanada.rs.sr</span></a><a title=".NET" href="/projects/net?jump=repository"><span style="padding-left:0px;">.NET</span></a><a title=":NET eRacuni" href="/projects/net-eracuni?jump=repository"><span style="padding-left:16px;">:NET eRacuni</span></a><a title="Матеј - helpdesk" href="/projects/helpdesk?jump=repository"><span style="padding-left:16px;">Матеј - helpdesk</span></a><a title="Мобилна - Пријава штете" href="/projects/prijava-stete?jump=repository"><span style="padding-left:16px;">Мобилна - Пријава штете</span></a><a title="3D vizualizacija" href="/projects/d-vizualizacija?jump=repository"><span style="padding-left:0px;">3D vizualizacija</span></a><a title="3D mašine ASCO, ATM,.." href="/projects/3d-masine-asco-atm?jump=repository"><span style="padding-left:16px;">3D mašine ASCO, ATM,..</span></a><a title="3d Max - kuce SAD" href="/projects/d-max-kuce-sad?jump=repository"><span style="padding-left:16px;">3d Max - kuce SAD</span></a><a title="3D Машине" href="/projects/3d-masine?jump=repository"><span style="padding-left:16px;">3D Машине</span></a><a title="АТМ / ASCO" href="/projects/atm-asco?jump=repository"><span style="padding-left:16px;">АТМ / ASCO</span></a><a title="ac-dcelectrical.com" href="/projects/ac-dcelectrical-com?jump=repository"><span style="padding-left:0px;">ac-dcelectrical.com</span></a><a title="agencijamrav.com" href="/projects/agencijamrav-com?jump=repository"><span style="padding-left:0px;">agencijamrav.com</span></a><a title="agrokonsultacijucentrs.com" href="/projects/agrokonsultacijucentrs-com?jump=repository"><span style="padding-left:0px;">agrokonsultacijucentrs.com</span></a><a title="Android RTRS" href="/projects/androidrs?jump=repository"><span style="padding-left:0px;">Android RTRS</span></a><a title="RTRS iOS" href="/projects/rtrs-ios?jump=repository"><span style="padding-left:16px;">RTRS iOS</span></a><a title="rtrsios" href="/projects/rtrsios?jump=repository"><span style="padding-left:16px;">rtrsios</span></a><a title="Update Androd RTRS" href="/projects/update-androd-rtrs?jump=repository"><span style="padding-left:16px;">Update Androd RTRS</span></a><a title="Сервиси" href="/projects/servis-rtrs?jump=repository"><span style="padding-left:32px;">Сервиси</span></a><a title="MPRRCG SMS servis" href="/projects/mprrcg-sms-servis?jump=repository"><span style="padding-left:0px;">MPRRCG SMS servis</span></a><a title="sms - Android" href="/projects/sms-android?jump=repository"><span style="padding-left:16px;">sms - Android</span></a><a title="SrpskaCafe" href="/projects/srpskacafe?jump=repository"><span style="padding-left:0px;">SrpskaCafe</span></a><a title="Srpska cafe - Servisi" href="/projects/srpska-cafe-servisi?jump=repository"><span style="padding-left:16px;">Srpska cafe - Servisi</span></a><a title="srpskaCafe Android 2" href="/projects/srpskacafe-android-2?jump=repository"><span style="padding-left:16px;">srpskaCafe Android 2</span></a><a title="SrpskaCafe iOS" href="/projects/srpskacafe-ios?jump=repository"><span style="padding-left:16px;">SrpskaCafe iOS</span></a><a title="TurizamRS" href="/projects/turizars?jump=repository"><span style="padding-left:0px;">TurizamRS</span></a><a title="Android TORS" href="/projects/android-tors?jump=repository"><span style="padding-left:16px;">Android TORS</span></a><a title="Mobilna aplikacija Istočno Sarajevo" href="/projects/mobilna-aplikacija-istocno-sarajevo?jump=repository"><span style="padding-left:32px;">Mobilna aplikacija Istočno Sarajevo</span></a><a title="ТО Фоча / Србиње" href="/projects/tofoca?jump=repository"><span style="padding-left:32px;">ТО Фоча / Србиње</span></a><a title="TO Вишеград" href="/projects/to-visegrad?jump=repository"><span style="padding-left:16px;">TO Вишеград</span></a><a title="Андроид ТОБЛ" href="/projects/android-tobl?jump=repository"><span style="padding-left:16px;">Андроид ТОБЛ</span></a><a title="Андроид - привредна комора РС" href="/projects/android-privrednakomora?jump=repository"><span style="padding-left:0px;">Андроид - привредна комора РС</span></a><a title="Ауто школе - autoskole.rs.sr" href="/projects/auto-skola?jump=repository"><span style="padding-left:0px;">Ауто школе - autoskole.rs.sr</span></a><a title="Android aplikacija za eKonferencije" href="/projects/android-ekonferencije?jump=repository"><span style="padding-left:0px;">Android aplikacija za eKonferencije</span></a><a title="BSLZ" href="/projects/bslz-android?jump=repository"><span style="padding-left:16px;">BSLZ</span></a><a title="BSLZ 2019" href="/projects/bslz-2019?jump=repository"><span style="padding-left:32px;">BSLZ 2019</span></a><a title="DEMI" href="/projects/demi-android?jump=repository"><span style="padding-left:16px;">DEMI</span></a><a title="AR проширена стварност" href="/projects/ar?jump=repository"><span style="padding-left:0px;">AR проширена стварност</span></a><a title="AR - Тврђава КАСТЕЛ" href="/projects/ar-tvrdjava-kastel?jump=repository"><span style="padding-left:16px;">AR - Тврђава КАСТЕЛ</span></a><a title="ASP - alfatherm.com" href="/projects/asp-alfatherm-com?jump=repository"><span style="padding-left:0px;">ASP - alfatherm.com</span></a><a title="autoskola15januar.com" href="/projects/autoskola15januar-com?jump=repository"><span style="padding-left:0px;">autoskola15januar.com</span></a><a title="B2B" href="/projects/b2b-idea?jump=repository"><span style="padding-left:0px;">B2B</span></a><a title="B2B predzeca" href="/projects/b2b-predzeca?jump=repository"><span style="padding-left:0px;">B2B predzeca</span></a><a title="BiATM2" href="/projects/biatm2?jump=repository"><span style="padding-left:0px;">BiATM2</span></a><a title="BitLab" href="/projects/bitlab?jump=repository"><span style="padding-left:0px;">BitLab</span></a><a title="Napomene - upustva" href="/projects/napomene-upustva?jump=repository"><span style="padding-left:16px;">Napomene - upustva</span></a><a title="Административно" href="/projects/administrativno?jump=repository"><span style="padding-left:16px;">Административно</span></a><a title="Апликација за регистрацију домена" href="/projects/registracija-domena?jump=repository"><span style="padding-left:16px;">Апликација за регистрацију домена</span></a><a title="Подршка" href="/projects/podrska?jump=repository"><span style="padding-left:16px;">Подршка</span></a><a title="Понуде" href="/projects/bitlabponude?jump=repository"><span style="padding-left:16px;">Понуде</span></a><a title="Предлози за сервере" href="/projects/predloz-serveri?jump=repository"><span style="padding-left:16px;">Предлози за сервере</span></a><a title="Регистар  .BA" href="/projects/registar-ba?jump=repository"><span style="padding-left:16px;">Регистар  .BA</span></a><a title="3d.bitlab.rs" href="/projects/d-bitlab-rs?jump=repository"><span style="padding-left:0px;">3d.bitlab.rs</span></a><a title="B2B" href="/projects/b2b?jump=repository"><span style="padding-left:0px;">B2B</span></a><a title="Suppport for B2Bevent.biz Platform" href="/projects/suppport-for-b2bevent-biz-platform?jump=repository"><span style="padding-left:16px;">Suppport for B2Bevent.biz Platform</span></a><a title="bitlab novi sajt" href="/projects/bitlab-novi-sajt?jump=repository"><span style="padding-left:0px;">bitlab novi sajt</span></a><a title="web.bitlab.rs" href="/projects/web-bitlab?jump=repository"><span style="padding-left:16px;">web.bitlab.rs</span></a><a title="Теxнологије BitLab" href="/projects/tehnologije-bitlab?jump=repository"><span style="padding-left:16px;">Теxнологије BitLab</span></a><a title="bitlab.host" href="/projects/bitlab-host?jump=repository"><span style="padding-left:0px;">bitlab.host</span></a><a title="eankete" href="/projects/eankete?jump=repository"><span style="padding-left:0px;">eankete</span></a><a title="edu.bitlab.rs" href="/projects/edu-bitlab-rs?jump=repository"><span style="padding-left:0px;">edu.bitlab.rs</span></a><a title="Edu - marketing" href="/projects/edu-marketing?jump=repository"><span style="padding-left:16px;">Edu - marketing</span></a><a title="ePosao.info" href="/projects/eposao-info?jump=repository"><span style="padding-left:0px;">ePosao.info</span></a><a title="hosting.bitlab.rs" href="/projects/hosting-bitlab-rs?jump=repository"><span style="padding-left:0px;">hosting.bitlab.rs</span></a><a title="hosting2.bitlab.rs" href="/projects/hosting2-bitlab-rs?jump=repository"><span style="padding-left:0px;">hosting2.bitlab.rs</span></a><a title="Hrvatska Travel" href="/projects/hrvatska-travel-1?jump=repository"><span style="padding-left:0px;">Hrvatska Travel</span></a><a title="HR Travel - Mareting" href="/projects/hr-travel-mareting?jump=repository"><span style="padding-left:16px;">HR Travel - Mareting</span></a><a title="Hrvatska Web" href="/projects/hrvatska-web?jump=repository"><span style="padding-left:16px;">Hrvatska Web</span></a><a title="Mobilna aplikacija Hrvatska turizam" href="/projects/mobilna-aplikacija-hrvatska-turizam?jump=repository"><span style="padding-left:16px;">Mobilna aplikacija Hrvatska turizam</span></a><a title="kursevi2.bitlab.rs" href="/projects/kursevi2-bitlab-rs?jump=repository"><span style="padding-left:0px;">kursevi2.bitlab.rs</span></a><a title="mobile.bitlab.rs" href="/projects/mobile-bitlab-rs?jump=repository"><span style="padding-left:0px;">mobile.bitlab.rs</span></a><a title="mojdom - Кућни савјет - управници зграда" href="/projects/upravnici-zgrada?jump=repository"><span style="padding-left:0px;">mojdom - Кућни савјет - управници зграда</span></a><a title="Privreda2 - privreda.org" href="/projects/privreda2-privreda-org?jump=repository"><span style="padding-left:0px;">Privreda2 - privreda.org</span></a><a title="Privreda2 marketing" href="/projects/privreda2-marketing?jump=repository"><span style="padding-left:16px;">Privreda2 marketing</span></a><a title="prodaja" href="/projects/prodaja?jump=repository"><span style="padding-left:0px;">prodaja</span></a><a title="pik.ba" href="/projects/pik-ba?jump=repository"><span style="padding-left:16px;">pik.ba</span></a><a title="shop" href="/projects/shop?jump=repository"><span style="padding-left:16px;">shop</span></a><a title="tehnoshop.bitlab.ba" href="/projects/tehnoshop-bitlab-ba?jump=repository"><span style="padding-left:16px;">tehnoshop.bitlab.ba</span></a><a title="webshop - prodaja/servisi" href="/projects/prodaja-servisi?jump=repository"><span style="padding-left:16px;">webshop - prodaja/servisi</span></a><a title="Грешке на webshop.bitlab.rs" href="/projects/webshop-bitlab-rs?jump=repository"><span style="padding-left:32px;">Грешке на webshop.bitlab.rs</span></a><a title="Продаја - Сервис - Администрација" href="/projects/prodaja-servis-administracija?jump=repository"><span style="padding-left:32px;">Продаја - Сервис - Администрација</span></a><a title="bitlab.ba" href="/projects/bitlab-ba?jump=repository"><span style="padding-left:0px;">bitlab.ba</span></a><a title="bitlab.ba/hosting" href="/projects/bitlab-ba-hosting?jump=repository"><span style="padding-left:16px;">bitlab.ba/hosting</span></a><a title="bitlab.rs - превод" href="/projects/bitlab-rs-prevod?jump=repository"><span style="padding-left:0px;">bitlab.rs - превод</span></a><a title="Brave stanovi - HomeHotel" href="/projects/brave-stanovi?jump=repository"><span style="padding-left:0px;">Brave stanovi - HomeHotel</span></a><a title="CAPITAL BARS - Restoran" href="/projects/capital-bars-restoran?jump=repository"><span style="padding-left:0px;">CAPITAL BARS - Restoran</span></a><a title="Centar za obrazovanje &quot;Kembridž&quot; s.p. Dušan Grbić" href="/projects/centar-za-obrazovanje-kembridz-s-p-dusan-grbic?jump=repository"><span style="padding-left:0px;">Centar za obrazovanje &quot;Kembridž&quot; s.p. Dušan Grbić</span></a><a title="Chicago Kitchen Remodel" href="/projects/chicago-kitchen-remodel?jump=repository"><span style="padding-left:0px;">Chicago Kitchen Remodel</span></a><a title="Damir -arhitektura" href="/projects/damir-arhitektura?jump=repository"><span style="padding-left:0px;">Damir -arhitektura</span></a><a title="Dizajn" href="/projects/redizajn-ift24?jump=repository"><span style="padding-left:0px;">Dizajn</span></a><a title="Dizajn ift24.com" href="/projects/dizajn-ift24-com?jump=repository"><span style="padding-left:0px;">Dizajn ift24.com</span></a><a title="DNK" href="/projects/dnk?jump=repository"><span style="padding-left:0px;">DNK</span></a><a title="DNK2" href="/projects/dnk2?jump=repository"><span style="padding-left:0px;">DNK2</span></a><a title="dnk3" href="/projects/dnk3?jump=repository"><span style="padding-left:0px;">dnk3</span></a><a title="edu.bitlab.host" href="/projects/edu-bitlab-host?jump=repository"><span style="padding-left:0px;">edu.bitlab.host</span></a><a title="ekonferencije_dev" href="/projects/ekonferencije_dev?jump=repository"><span style="padding-left:0px;">ekonferencije_dev</span></a><a title="android - chat" href="/projects/android-chat?jump=repository"><span style="padding-left:16px;">android - chat</span></a><a title="DEMI" href="/projects/demi?jump=repository"><span style="padding-left:16px;">DEMI</span></a><a title="eKonferencije-marketing" href="/projects/ekonferencije-marketing?jump=repository"><span style="padding-left:16px;">eKonferencije-marketing</span></a><a title="ekonferencije-view" href="/projects/ekonferencije-view?jump=repository"><span style="padding-left:16px;">ekonferencije-view</span></a><a title="Потенцијални скупови" href="/projects/potencijalni-skupovi?jump=repository"><span style="padding-left:16px;">Потенцијални скупови</span></a><a title="enekretnine.info" href="/projects/enekretnine-info?jump=repository"><span style="padding-left:0px;">enekretnine.info</span></a><a title="nekretnine.rs.sr" href="/projects/nekretnine-rs-sr?jump=repository"><span style="padding-left:16px;">nekretnine.rs.sr</span></a><a title="eOglasi.info" href="/projects/eoglasi-info?jump=repository"><span style="padding-left:0px;">eOglasi.info</span></a><a title="firena" href="/projects/firena?jump=repository"><span style="padding-left:0px;">firena</span></a><a title="gariful" href="/projects/gariful?jump=repository"><span style="padding-left:0px;">gariful</span></a><a title="globalCompany.ba" href="/projects/globalcompany-ba?jump=repository"><span style="padding-left:0px;">globalCompany.ba</span></a><a title="HAProxy, Lua, Redis" href="/projects/haproxy-lua-redis?jump=repository"><span style="padding-left:0px;">HAProxy, Lua, Redis</span></a><a title="Havrex" href="/projects/havrex?jump=repository"><span style="padding-left:0px;">Havrex</span></a><a title="Help Matematika" href="/projects/help-matematika?jump=repository"><span style="padding-left:0px;">Help Matematika</span></a><a title="Igrica-jezici" href="/projects/igrica-jezici?jump=repository"><span style="padding-left:0px;">Igrica-jezici</span></a><a title="iOS igrica jezici" href="/projects/ios-igrica-jezici?jump=repository"><span style="padding-left:16px;">iOS igrica jezici</span></a><a title="Support thespellingleague" href="/projects/support-thespellingleague?jump=repository"><span style="padding-left:16px;">Support thespellingleague</span></a><a title="iOS apk" href="/projects/ios-apk?jump=repository"><span style="padding-left:0px;">iOS apk</span></a><a title="iskra.co" href="/projects/iskra-co?jump=repository"><span style="padding-left:0px;">iskra.co</span></a><a title="konsalting.rs.sr" href="/projects/konsalting-rs-sr?jump=repository"><span style="padding-left:0px;">konsalting.rs.sr</span></a><a title="Korona - QR sertifikat" href="/projects/korona-qr-sertifikat?jump=repository"><span style="padding-left:0px;">Korona - QR sertifikat</span></a><a title="Kursevi" href="/projects/kursevi?jump=repository"><span style="padding-left:0px;">Kursevi</span></a><a title="Android" href="/projects/android?jump=repository"><span style="padding-left:16px;">Android</span></a><a title="AngularJS" href="/projects/angularjs?jump=repository"><span style="padding-left:16px;">AngularJS</span></a><a title="Engleski" href="/projects/engleski?jump=repository"><span style="padding-left:16px;">Engleski</span></a><a title="GIT" href="/projects/git?jump=repository"><span style="padding-left:16px;">GIT</span></a><a title="Java-kurs" href="/projects/java-kurs?jump=repository"><span style="padding-left:16px;">Java-kurs</span></a><a title="Laravel kurs" href="/projects/laravel-kurs?jump=repository"><span style="padding-left:16px;">Laravel kurs</span></a><a title="Linux" href="/projects/linux-kurs?jump=repository"><span style="padding-left:16px;">Linux</span></a><a title="Marketing" href="/projects/marketing?jump=repository"><span style="padding-left:16px;">Marketing</span></a><a title="web-marketing" href="/projects/web-marketing?jump=repository"><span style="padding-left:32px;">web-marketing</span></a><a title="Дигитални маркетинг" href="/projects/digitalni-marketing?jump=repository"><span style="padding-left:32px;">Дигитални маркетинг</span></a><a title="NLP" href="/projects/nlp?jump=repository"><span style="padding-left:16px;">NLP</span></a><a title="NodeJS" href="/projects/nodejs?jump=repository"><span style="padding-left:16px;">NodeJS</span></a><a title="PHP курс" href="/projects/php-kurs?jump=repository"><span style="padding-left:16px;">PHP курс</span></a><a title="Python" href="/projects/python?jump=repository"><span style="padding-left:16px;">Python</span></a><a title="WebMaster" href="/projects/webmaster?jump=repository"><span style="padding-left:16px;">WebMaster</span></a><a title="WordPress kurs" href="/projects/wordpress-kurs?jump=repository"><span style="padding-left:16px;">WordPress kurs</span></a><a title="Графички дизајн" href="/projects/kurs-graficki-dizajn?jump=repository"><span style="padding-left:16px;">Графички дизајн</span></a><a title="Дизајн" href="/projects/kurs-dizajn?jump=repository"><span style="padding-left:16px;">Дизајн</span></a><a title="Курс React native" href="/projects/kurs-react-native?jump=repository"><span style="padding-left:16px;">Курс React native</span></a><a title="Маркетинг" href="/projects/online-marketing?jump=repository"><span style="padding-left:16px;">Маркетинг</span></a><a title="Математика" href="/projects/matematika?jump=repository"><span style="padding-left:16px;">Математика</span></a><a title="Мреже: курс" href="/projects/mreze-kurs?jump=repository"><span style="padding-left:16px;">Мреже: курс</span></a><a title="lektor-bm.si" href="/projects/lektor-bm-si?jump=repository"><span style="padding-left:0px;">lektor-bm.si</span></a><a title="makoprint" href="/projects/makoprint?jump=repository"><span style="padding-left:0px;">makoprint</span></a><a title="Mape" href="/projects/mape?jump=repository"><span style="padding-left:0px;">Mape</span></a><a title="Mape BL" href="/projects/mape-bl?jump=repository"><span style="padding-left:0px;">Mape BL</span></a><a title="Marketing / akvizicija" href="/projects/marketing-akvizicija?jump=repository"><span style="padding-left:0px;">Marketing / akvizicija</span></a><a title="DE Marketing / akvizicija " href="/projects/de-marketing-akvizicija?jump=repository"><span style="padding-left:16px;">DE Marketing / akvizicija </span></a><a title="Linux администрација" href="/projects/linux-administracija?jump=repository"><span style="padding-left:16px;">Linux администрација</span></a><a title="maskice" href="/projects/maskice?jump=repository"><span style="padding-left:0px;">maskice</span></a><a title="Matejevi projekt" href="/projects/matejevi-projekt?jump=repository"><span style="padding-left:0px;">Matejevi projekt</span></a><a title="Bellestra" href="/projects/bellestra?jump=repository"><span style="padding-left:16px;">Bellestra</span></a><a title="Juraj centar" href="/projects/juraj-centar?jump=repository"><span style="padding-left:16px;">Juraj centar</span></a><a title="Magacin" href="/projects/magacin?jump=repository"><span style="padding-left:16px;">Magacin</span></a><a title="MausMakt" href="/projects/mausmakt?jump=repository"><span style="padding-left:16px;">MausMakt</span></a><a title="mausmaky.com" href="/projects/mausmaky-com?jump=repository"><span style="padding-left:16px;">mausmaky.com</span></a><a title="Nekretnine - biliskov.com" href="/projects/nekretnine?jump=repository"><span style="padding-left:16px;">Nekretnine - biliskov.com</span></a><a title="PIPI" href="/projects/pipi?jump=repository"><span style="padding-left:16px;">PIPI</span></a><a title="Skaldište Matej" href="/projects/skaldiste-matej?jump=repository"><span style="padding-left:16px;">Skaldište Matej</span></a><a title="WMS" href="/projects/wms?jump=repository"><span style="padding-left:16px;">WMS</span></a><a title="meditation" href="/projects/meditation?jump=repository"><span style="padding-left:0px;">meditation</span></a><a title="megafon.si " href="/projects/megafon-si?jump=repository"><span style="padding-left:0px;">megafon.si </span></a><a title="Mobilna - megafon" href="/projects/mobilna-megafon?jump=repository"><span style="padding-left:16px;">Mobilna - megafon</span></a><a title="web - сервиси Megafon" href="/projects/web-servisi-megafon?jump=repository"><span style="padding-left:16px;">web - сервиси Megafon</span></a><a title="Mobilna za gradove" href="/projects/mobilna-za-gradove?jump=repository"><span style="padding-left:0px;">Mobilna za gradove</span></a><a title="mojenovosti.com" href="/projects/mojenovosti-com?jump=repository"><span style="padding-left:0px;">mojenovosti.com</span></a><a title="Nekretnine .AT" href="/projects/nekretnine-at?jump=repository"><span style="padding-left:0px;">Nekretnine .AT</span></a><a title="node.js сервер" href="/projects/node-js-server?jump=repository"><span style="padding-left:0px;">node.js сервер</span></a><a title="agroznanje" href="/projects/agroznanje?jump=repository"><span style="padding-left:16px;">agroznanje</span></a><a title="borton-bl.com" href="/projects/borton-bl-com?jump=repository"><span style="padding-left:16px;">borton-bl.com</span></a><a title="chiara.ba" href="/projects/chiara-ba?jump=repository"><span style="padding-left:16px;">chiara.ba</span></a><a title="drpetkovic" href="/projects/drpetkovic?jump=repository"><span style="padding-left:16px;">drpetkovic</span></a><a title="focuspunctum" href="/projects/focuspunctum?jump=repository"><span style="padding-left:16px;">focuspunctum</span></a><a title="havrexcom" href="/projects/havrexcom?jump=repository"><span style="padding-left:16px;">havrexcom</span></a><a title="mrkonjicgrad-vue" href="/projects/mrkonjicgrad-vue?jump=repository"><span style="padding-left:16px;">mrkonjicgrad-vue</span></a><a title="otkrijderventu" href="/projects/otkrijderventu?jump=repository"><span style="padding-left:16px;">otkrijderventu</span></a><a title="soelprenosbl.org" href="/projects/soelprenosbl-org?jump=repository"><span style="padding-left:16px;">soelprenosbl.org</span></a><a title="srednjaskola-srbac.org" href="/projects/srednjaskola-srbac-org?jump=repository"><span style="padding-left:16px;">srednjaskola-srbac.org</span></a><a title="tobd.ba" href="/projects/tobrcko-org?jump=repository"><span style="padding-left:16px;">tobd.ba</span></a><a title="to--brcko-mobilna" href="/projects/to-brcko-mobilna?jump=repository"><span style="padding-left:32px;">to--brcko-mobilna</span></a><a title="transformingtodigital.pro" href="/projects/transformingtodigital-pro?jump=repository"><span style="padding-left:16px;">transformingtodigital.pro</span></a><a title="turistteslic" href="/projects/turistteslic?jump=repository"><span style="padding-left:16px;">turistteslic</span></a><a title="mobilna turistteslic.org" href="/projects/mobilna-turistteslic-org?jump=repository"><span style="padding-left:32px;">mobilna turistteslic.org</span></a><a title="zaporodicu.org" class="selected" href="/projects/zaporodicu-org?jump=repository"><span style="padding-left:16px;">zaporodicu.org</span></a><a title="Основна школа - шаблон" href="/projects/osskola-sablon?jump=repository"><span style="padding-left:32px;">Основна школа - шаблон</span></a><a title="Електронска ризница" href="/projects/elektronska-riznica?jump=repository"><span style="padding-left:16px;">Електронска ризница</span></a><a title="Општина Рибник" href="/projects/opstina-ribnik?jump=repository"><span style="padding-left:16px;">Општина Рибник</span></a><a title="Осмаци" href="/projects/osmaci?jump=repository"><span style="padding-left:16px;">Осмаци</span></a><a title="Туристичка организација Сребреница" href="/projects/tours-srebrenica?jump=repository"><span style="padding-left:16px;">Туристичка организација Сребреница</span></a><a title="УРЦ" href="/projects/urc-2021?jump=repository"><span style="padding-left:16px;">УРЦ</span></a><a title="osdjurajaksicbl.org" href="/projects/osdjurajaksicbl-org?jump=repository"><span style="padding-left:0px;">osdjurajaksicbl.org</span></a><a title="perfectatravel" href="/projects/perfectatravel?jump=repository"><span style="padding-left:0px;">perfectatravel</span></a><a title="pickpack.hr" href="/projects/pickpack-hr?jump=repository"><span style="padding-left:0px;">pickpack.hr</span></a><a title="piramida" href="/projects/piramida?jump=repository"><span style="padding-left:0px;">piramida</span></a><a title="Pogrebana prema" href="/projects/pogrebana-prema?jump=repository"><span style="padding-left:0px;">Pogrebana prema</span></a><a title="Promo materijali" href="/projects/promo-materijali?jump=repository"><span style="padding-left:0px;">Promo materijali</span></a><a title="React i TypoScript" href="/projects/angular-unionvision?jump=repository"><span style="padding-left:0px;">React i TypoScript</span></a><a title="React,JS - projekt" href="/projects/react-js-projekt?jump=repository"><span style="padding-left:0px;">React,JS - projekt</span></a><a title="rs.sr" href="/projects/rs-sr?jump=repository"><span style="padding-left:0px;">rs.sr</span></a><a title="RSGeeks.rs" href="/projects/rsgeeks-rs?jump=repository"><span style="padding-left:0px;">RSGeeks.rs</span></a><a title="Samsung" href="/projects/samsung?jump=repository"><span style="padding-left:0px;">Samsung</span></a><a title="sanremobl.com" href="/projects/sanremobl-com?jump=repository"><span style="padding-left:0px;">sanremobl.com</span></a><a title="sdstad.se" href="/projects/sdstad-se?jump=repository"><span style="padding-left:0px;">sdstad.se</span></a><a title="SMS - CSV - WEB" href="/projects/sms-csv-web?jump=repository"><span style="padding-left:0px;">SMS - CSV - WEB</span></a><a title="SMS-CSV" href="/projects/sms-csv?jump=repository"><span style="padding-left:0px;">SMS-CSV</span></a><a title="Taxi" href="/projects/taxi?jump=repository"><span style="padding-left:0px;">Taxi</span></a><a title="Taxi-rainer" href="/projects/taxi-rainer?jump=repository"><span style="padding-left:0px;">Taxi-rainer</span></a><a title="VAMO" href="/projects/vamo?jump=repository"><span style="padding-left:16px;">VAMO</span></a><a title="Testni zadaci" href="/projects/testni-zadaci?jump=repository"><span style="padding-left:0px;">Testni zadaci</span></a><a title="Tmview" href="/projects/tmview?jump=repository"><span style="padding-left:0px;">Tmview</span></a><a title="trougaors" href="/projects/trougaors?jump=repository"><span style="padding-left:0px;">trougaors</span></a><a title="TvQuality" href="/projects/tvquality?jump=repository"><span style="padding-left:0px;">TvQuality</span></a><a title="Vatikan Tour" href="/projects/vatikan-tour?jump=repository"><span style="padding-left:0px;">Vatikan Tour</span></a><a title="vet.gov.ba" href="/projects/vet-gov-ba?jump=repository"><span style="padding-left:0px;">vet.gov.ba</span></a><a title="Viselio" href="/projects/viselio?jump=repository"><span style="padding-left:0px;">Viselio</span></a><a title="Api Viselio" href="/projects/api-viselio?jump=repository"><span style="padding-left:16px;">Api Viselio</span></a><a title="Backoffice Viselio" href="/projects/backoffice-viselio?jump=repository"><span style="padding-left:16px;">Backoffice Viselio</span></a><a title="Front-end Viselio" href="/projects/front-end-viselio?jump=repository"><span style="padding-left:16px;">Front-end Viselio</span></a><a title="Mongolia" href="/projects/mongolia?jump=repository"><span style="padding-left:16px;">Mongolia</span></a><a title="WEB" href="/projects/izrada_web_stranica?jump=repository"><span style="padding-left:0px;">WEB</span></a><a title="adriaticvakanties.nl" href="/projects/adriaticvakanties-nl?jump=repository"><span style="padding-left:16px;">adriaticvakanties.nl</span></a><a title="anurs" href="/projects/anurs?jump=repository"><span style="padding-left:16px;">anurs</span></a><a title="anurs.org" href="/projects/anurs-org?jump=repository"><span style="padding-left:16px;">anurs.org</span></a><a title="autojelaca.com" href="/projects/autojelaca-com?jump=repository"><span style="padding-left:16px;">autojelaca.com</span></a><a title="cambridge-centar" href="/projects/cambridge-centar?jump=repository"><span style="padding-left:16px;">cambridge-centar</span></a><a title="cavitabl.com" href="/projects/cavitabl-com?jump=repository"><span style="padding-left:16px;">cavitabl.com</span></a><a title="Damir - arhitekta" href="/projects/damir-arhitekta?jump=repository"><span style="padding-left:16px;">Damir - arhitekta</span></a><a title="eShop" href="/projects/eshop?jump=repository"><span style="padding-left:16px;">eShop</span></a><a title="honey-slim.ba" href="/projects/honey-slim-ba?jump=repository"><span style="padding-left:16px;">honey-slim.ba</span></a><a title="hotelmoskva.net" href="/projects/hotelmoskva-net?jump=repository"><span style="padding-left:16px;">hotelmoskva.net</span></a><a title="inox-ograde.net" href="/projects/inox-ograde-net?jump=repository"><span style="padding-left:16px;">inox-ograde.net</span></a><a title="Ivanovi projekt" href="/projects/ivanovi-projekt?jump=repository"><span style="padding-left:16px;">Ivanovi projekt</span></a><a title="moodboard.rs.sr" href="/projects/moodboard-rs-sr?jump=repository"><span style="padding-left:32px;">moodboard.rs.sr</span></a><a title="Romms xml integration" href="/projects/romms-xml-integration?jump=repository"><span style="padding-left:32px;">Romms xml integration</span></a><a title="SemiTimeS" href="/projects/semitimes?jump=repository"><span style="padding-left:32px;">SemiTimeS</span></a><a title="kom-renmark" href="/projects/kom-renmark?jump=repository"><span style="padding-left:16px;">kom-renmark</span></a><a title="Konel" href="/projects/konel?jump=repository"><span style="padding-left:16px;">Konel</span></a><a title="konel.ba v2" href="/projects/konel-ba-v2?jump=repository"><span style="padding-left:32px;">konel.ba v2</span></a><a title="LaktasiTurizam" href="/projects/laktasiturizam?jump=repository"><span style="padding-left:16px;">LaktasiTurizam</span></a><a title="Novijelsingrad.com" href="/projects/novijelsingrad-com?jump=repository"><span style="padding-left:16px;">Novijelsingrad.com</span></a><a title="NVDRS.org" href="/projects/nvdrs-org?jump=repository"><span style="padding-left:16px;">NVDRS.org</span></a><a title="otkrijderventu.com" href="/projects/otkrijderventu-com?jump=repository"><span style="padding-left:16px;">otkrijderventu.com</span></a><a title="Oпштина Језеро" href="/projects/o?jump=repository"><span style="padding-left:16px;">Oпштина Језеро</span></a><a title="pgusluga.ba" href="/projects/pgusluga-ba?jump=repository"><span style="padding-left:16px;">pgusluga.ba</span></a><a title="plebiscitrs.org" href="/projects/plebiscitrs-org?jump=repository"><span style="padding-left:16px;">plebiscitrs.org</span></a><a title="podnogrijanje.ba" href="/projects/podnogrijanje-ba?jump=repository"><span style="padding-left:16px;">podnogrijanje.ba</span></a><a title="Poslovniimenik redizajn" href="/projects/poslovniimenik-redizajn?jump=repository"><span style="padding-left:16px;">Poslovniimenik redizajn</span></a><a title="poslovniimenik.rs.sr" href="/projects/poslovniimenik-rs-sr?jump=repository"><span style="padding-left:32px;">poslovniimenik.rs.sr</span></a><a title="pro-dinex.com" href="/projects/pro-dinex-com?jump=repository"><span style="padding-left:16px;">pro-dinex.com</span></a><a title="prodajafiltera.com" href="/projects/prodajafiltera-com?jump=repository"><span style="padding-left:16px;">prodajafiltera.com</span></a><a title="rent-kombi.com" href="/projects/rent-kombi-com?jump=repository"><span style="padding-left:16px;">rent-kombi.com</span></a><a title="Služba za zapošljavanje Kantona Sarajevo JUSZZKS" href="/projects/sluzba-za-zaposljavanje-kantona-sarajevo-juszzks?jump=repository"><span style="padding-left:16px;">Služba za zapošljavanje Kantona Sarajevo JUSZZKS</span></a><a title="telestesmetohiensis.rs.ba" href="/projects/telestesmetohiensis-rs-ba?jump=repository"><span style="padding-left:16px;">telestesmetohiensis.rs.ba</span></a><a title="terentiprevoz.com" href="/projects/terentiprevoz-com?jump=repository"><span style="padding-left:16px;">terentiprevoz.com</span></a><a title="vostok.rs" href="/projects/vostok-rs?jump=repository"><span style="padding-left:16px;">vostok.rs</span></a><a title="sreenigne" href="/projects/sreenigne?jump=repository"><span style="padding-left:16px;">sreenigne</span></a><a title="Мркоњић Град" href="/projects/opstina-mrkonjic-grad?jump=repository"><span style="padding-left:16px;">Мркоњић Град</span></a><a title="mrkonjic-grad.rs.sr" href="/projects/mrkonjic-grad-rs-sr?jump=repository"><span style="padding-left:32px;">mrkonjic-grad.rs.sr</span></a><a title="WordPress" href="/projects/wordpress?jump=repository"><span style="padding-left:16px;">WordPress</span></a><a title="Агенција за банкарство РС" href="/projects/agencija-za-bankarstvo-rs?jump=repository"><span style="padding-left:16px;">Агенција за банкарство РС</span></a><a title="dev.abrs.ba - развојан верзија сајта В.1" href="/projects/dev-abrs-ba?jump=repository"><span style="padding-left:32px;">dev.abrs.ba - развојан верзија сајта В.1</span></a><a title="Анкете - привредна комора" href="/projects/anketa-pk?jump=repository"><span style="padding-left:16px;">Анкете - привредна комора</span></a><a title="Драгишић и Карлаш д.о.о." href="/projects/dragisic-karlas?jump=repository"><span style="padding-left:16px;">Драгишић и Карлаш д.о.о.</span></a><a title="Економска школа Бања Лука" href="/projects/ekonomskaskolabl?jump=repository"><span style="padding-left:16px;">Економска школа Бања Лука</span></a><a title="Институт за јавно здравство РС" href="/projects/phi-rs-ba?jump=repository"><span style="padding-left:16px;">Институт за јавно здравство РС</span></a><a title="Календари" href="/projects/kalendari?jump=repository"><span style="padding-left:16px;">Календари</span></a><a title="Нови БитЛаб CMS" href="/projects/cms?jump=repository"><span style="padding-left:16px;">Нови БитЛаб CMS</span></a><a title="План за ВЕБ " href="/projects/plan-web?jump=repository"><span style="padding-left:16px;">План за ВЕБ </span></a><a title="Привредни портал Градишка" href="/projects/privredagradiska?jump=repository"><span style="padding-left:16px;">Привредни портал Градишка</span></a><a title="Ресторани" href="/projects/restorani?jump=repository"><span style="padding-left:16px;">Ресторани</span></a><a title="Теме - Шаблони" href="/projects/teme?jump=repository"><span style="padding-left:16px;">Теме - Шаблони</span></a><a title="Читуље" href="/projects/citulje?jump=repository"><span style="padding-left:16px;">Читуље</span></a><a title="WEB Linux" href="/projects/web-linux?jump=repository"><span style="padding-left:0px;">WEB Linux</span></a><a title="web shop" href="/projects/web-shop?jump=repository"><span style="padding-left:0px;">web shop</span></a><a title="Web Shop grill.werbeeinfach.space" href="/projects/shop-grill-werbeeinfach-space?jump=repository"><span style="padding-left:16px;">Web Shop grill.werbeeinfach.space</span></a><a title="Web Shop restaurangkök.se" href="/projects/web-shop-restaurangkoek-se?jump=repository"><span style="padding-left:16px;">Web Shop restaurangkök.se</span></a><a title="Web Solutions" href="/projects/web-solutions?jump=repository"><span style="padding-left:0px;">Web Solutions</span></a><a title="web сервис за Агенцију за безбједност саобраћаја" href="/projects/web-absrs?jump=repository"><span style="padding-left:0px;">web сервис за Агенцију за безбједност саобраћаја</span></a><a title="web.bitlab.rs" href="/projects/web-bitlab-rs?jump=repository"><span style="padding-left:0px;">web.bitlab.rs</span></a><a title="woodscout" href="/projects/woodscout?jump=repository"><span style="padding-left:0px;">woodscout</span></a><a title="admin.wood" href="/projects/admin-wood?jump=repository"><span style="padding-left:16px;">admin.wood</span></a><a title="app.wood" href="/projects/app-wood?jump=repository"><span style="padding-left:16px;">app.wood</span></a><a title="WordPress пројекти" href="/projects/wordpress-projekti?jump=repository"><span style="padding-left:0px;">WordPress пројекти</span></a><a title="tagmyfish.net" href="/projects/tagmyfish-net?jump=repository"><span style="padding-left:16px;">tagmyfish.net</span></a><a title="Jobexchange - freelancer" href="/projects/jobexchange?jump=repository"><span style="padding-left:0px;">Jobexchange - freelancer</span></a><a title="Нови CMS" href="/projects/novi-cms?jump=repository"><span style="padding-left:0px;">Нови CMS</span></a><a title="Рекламе" href="/projects/btgreklame?jump=repository"><span style="padding-left:0px;">Рекламе</span></a><a title="Јавне набавке" href="/projects/javne-nabavke?jump=repository"><span style="padding-left:0px;">Јавне набавке</span></a><a title="Аљоша" href="/projects/aljosa?jump=repository"><span style="padding-left:0px;">Аљоша</span></a><a title="Администрација" href="/projects/administracija?jump=repository"><span style="padding-left:0px;">Администрација</span></a><a title="Запошљавање програмера" href="/projects/zaposlajavanje-programera?jump=repository"><span style="padding-left:16px;">Запошљавање програмера</span></a><a title="Озвучење сајтова" href="/projects/ozvucenje-sajtova?jump=repository"><span style="padding-left:16px;">Озвучење сајтова</span></a><a title="Потенцијални пројекти - клијенти" href="/projects/potencijalni-projekti-klijenti?jump=repository"><span style="padding-left:16px;">Потенцијални пројекти - клијенти</span></a><a title="Администрација 2" href="/projects/administracija2?jump=repository"><span style="padding-left:0px;">Администрација 2</span></a><a title="Састанци 2" href="/projects/sastanci2?jump=repository"><span style="padding-left:16px;">Састанци 2</span></a><a title="Акције" href="/projects/akcije?jump=repository"><span style="padding-left:0px;">Акције</span></a><a title="Андроид - SMS" href="/projects/sms?jump=repository"><span style="padding-left:0px;">Андроид - SMS</span></a><a title="Андроид - пракса" href="/projects/android-praksa?jump=repository"><span style="padding-left:0px;">Андроид - пракса</span></a><a title="Анимације" href="/projects/animacije?jump=repository"><span style="padding-left:0px;">Анимације</span></a><a title="Антивируси" href="/projects/antivirusi?jump=repository"><span style="padding-left:0px;">Антивируси</span></a><a title="Dr-web антивирус" href="/projects/dr-web?jump=repository"><span style="padding-left:16px;">Dr-web антивирус</span></a><a title="F-secure" href="/projects/f-secure?jump=repository"><span style="padding-left:16px;">F-secure</span></a><a title="Инсталације" href="/projects/fsecure-instalacije?jump=repository"><span style="padding-left:32px;">Инсталације</span></a><a title="Kaspersky" href="/projects/kapspersky?jump=repository"><span style="padding-left:16px;">Kaspersky</span></a><a title="БСЛЗ подаци" href="/projects/bslzpodaci?jump=repository"><span style="padding-left:0px;">БСЛЗ подаци</span></a><a title="Бар код читач" href="/projects/bar-kod-citac?jump=repository"><span style="padding-left:0px;">Бар код читач</span></a><a title="Брчко - веб, мобилана" href="/projects/web-to-brcko?jump=repository"><span style="padding-left:0px;">Брчко - веб, мобилана</span></a><a title="Вођење пројеката - задатака" href="/projects/vodjenje-projekata?jump=repository"><span style="padding-left:0px;">Вођење пројеката - задатака</span></a><a title="Вођење пројеката в2" href="/projects/vodjenje-projekata-v2?jump=repository"><span style="padding-left:16px;">Вођење пројеката в2</span></a><a title="Дизајн" href="/projects/dizajn?jump=repository"><span style="padding-left:0px;">Дизајн</span></a><a title="Дизајн" href="/projects/dizajn2?jump=repository"><span style="padding-left:0px;">Дизајн</span></a><a title="mibag-ag.ch" href="/projects/mibag-ag-ch?jump=repository"><span style="padding-left:16px;">mibag-ag.ch</span></a><a title="Епархија" href="/projects/eparhija?jump=repository"><span style="padding-left:0px;">Епархија</span></a><a title="За породицу - мобилна" href="/projects/zaporodicu-mobilna?jump=repository"><span style="padding-left:0px;">За породицу - мобилна</span></a><a title="Закони - Правилици - Одлуке" href="/projects/zakoni?jump=repository"><span style="padding-left:0px;">Закони - Правилици - Одлуке</span></a><a title="Идеје" href="/projects/ideje?jump=repository"><span style="padding-left:0px;">Идеје</span></a><a title="Избори" href="/projects/izbori?jump=repository"><span style="padding-left:0px;">Избори</span></a><a title="Izbori - marketing" href="/projects/izbori-marketing?jump=repository"><span style="padding-left:16px;">Izbori - marketing</span></a><a title="Избори Андроид" href="/projects/izbori-android?jump=repository"><span style="padding-left:16px;">Избори Андроид</span></a><a title="Избори сајт" href="/projects/sajt-izbori?jump=repository"><span style="padding-left:16px;">Избори сајт</span></a><a title="Интерни пројекти" href="/projects/interni-projekti?jump=repository"><span style="padding-left:0px;">Интерни пројекти</span></a><a title="Преузмање контакт податка са сајтова" href="/projects/preuzmanje-kontakt-podataka-sa-sajtova?jump=repository"><span style="padding-left:16px;">Преузмање контакт податка са сајтова</span></a><a title="Мали веб пројекти" href="/projects/mali-web-projekti?jump=repository"><span style="padding-left:0px;">Мали веб пројекти</span></a><a title="Мониторинг" href="/projects/monitoring?jump=repository"><span style="padding-left:0px;">Мониторинг</span></a><a title="Нови Борик" href="/projects/noviborik?jump=repository"><span style="padding-left:0px;">Нови Борик</span></a><a title="Екватор" href="/projects/ekvatorbl?jump=repository"><span style="padding-left:16px;">Екватор</span></a><a title="Обрачун плата" href="/projects/obracun-plata?jump=repository"><span style="padding-left:0px;">Обрачун плата</span></a><a title="Одржавање" href="/projects/odrzavanje2?jump=repository"><span style="padding-left:0px;">Одржавање</span></a><a title="absrs.org" href="/projects/absrs-org?jump=repository"><span style="padding-left:16px;">absrs.org</span></a><a title="ABSRS - alkohol - Kampanja na drustvenim mrezama" href="/projects/absrs-alkohol-kampanja-na-drustvenim-mrezama?jump=repository"><span style="padding-left:32px;">ABSRS - alkohol - Kampanja na drustvenim mrezama</span></a><a title="advokatboskodiljevic.com" href="/projects/advokatboskodiljevic-com?jump=repository"><span style="padding-left:16px;">advokatboskodiljevic.com</span></a><a title="CIDEA" href="/projects/cidea?jump=repository"><span style="padding-left:16px;">CIDEA</span></a><a title="http://izobrazevanje-bm.si" href="/projects/http-izobrazevanje-bm-si?jump=repository"><span style="padding-left:16px;">http://izobrazevanje-bm.si</span></a><a title="igr.unibl.org" href="/projects/igr-unibl-org?jump=repository"><span style="padding-left:16px;">igr.unibl.org</span></a><a title="nikola-micic.com" href="/projects/nikola-micic-com?jump=repository"><span style="padding-left:16px;">nikola-micic.com</span></a><a title="Ponjevic" href="/projects/ponjevic?jump=repository"><span style="padding-left:16px;">Ponjevic</span></a><a title="Агенција за банкарство РС - одржавање " href="/projects/abrs-odrzavanje?jump=repository"><span style="padding-left:16px;">Агенција за банкарство РС - одржавање </span></a><a title="Институт за генетичке ресурсе" href="/projects/griunibl?jump=repository"><span style="padding-left:16px;">Институт за генетичке ресурсе</span></a><a title="apa" href="/projects/apa?jump=repository"><span style="padding-left:32px;">apa</span></a><a title="Пословни именик - Одржавање " href="/projects/odrzavanje-poslovni-imenik?jump=repository"><span style="padding-left:16px;">Пословни именик - Одржавање </span></a><a title="Основне школе - хостинг" href="/projects/os-skole-hosting?jump=repository"><span style="padding-left:0px;">Основне школе - хостинг</span></a><a title="Педагошки завод Републике Српске" href="/projects/rpz-rs-org?jump=repository"><span style="padding-left:0px;">Педагошки завод Републике Српске</span></a><a title="План активности" href="/projects/plan-aktivnosti?jump=repository"><span style="padding-left:0px;">План активности</span></a><a title="Подршка" href="/projects/podrskatiketsistem?jump=repository"><span style="padding-left:0px;">Подршка</span></a><a title="Web подршка" href="/projects/webpodrska?jump=repository"><span style="padding-left:16px;">Web подршка</span></a><a title="Поносна картица - мобилна апликација" href="/projects/ponosna-kartica-mobilna?jump=repository"><span style="padding-left:0px;">Поносна картица - мобилна апликација</span></a><a title="Потенцијални пројекти" href="/projects/potencijalniprojekti?jump=repository"><span style="padding-left:0px;">Потенцијални пројекти</span></a><a title=".NET (es-net.si)" href="/projects/net-es-net-si?jump=repository"><span style="padding-left:16px;">.NET (es-net.si)</span></a><a title="Андроид- евиденција радног времена" href="/projects/android-evidencija-radnog-vremena?jump=repository"><span style="padding-left:32px;">Андроид- евиденција радног времена</span></a><a title="Евиденција радног времена - В.2" href="/projects/evidencija-radnog-vremena-v2?jump=repository"><span style="padding-left:48px;">Евиденција радног времена - В.2</span></a><a title="web-work-time " href="/projects/web-work-time?jump=repository"><span style="padding-left:64px;">web-work-time </span></a><a title="Front - worktime" href="/projects/front-worktime?jump=repository"><span style="padding-left:80px;">Front - worktime</span></a><a title="Front - worktime 2" href="/projects/front-worktime-2?jump=repository"><span style="padding-left:80px;">Front - worktime 2</span></a><a title="OnLine Doctor" href="/projects/online-doctor?jump=repository"><span style="padding-left:16px;">OnLine Doctor</span></a><a title="Дрво" href="/projects/drvo?jump=repository"><span style="padding-left:16px;">Дрво</span></a><a title="Мобилни магацин" href="/projects/mobilni-magacin?jump=repository"><span style="padding-left:16px;">Мобилни магацин</span></a><a title="Репроматеријал" href="/projects/reromaterijal?jump=repository"><span style="padding-left:16px;">Репроматеријал</span></a><a title="Сједнице-андроид" href="/projects/sjednice-android?jump=repository"><span style="padding-left:16px;">Сједнице-андроид</span></a><a title="2019 Праксав - економија" href="/projects/2016-praksa?jump=repository"><span style="padding-left:0px;">2019 Праксав - економија</span></a><a title="Praksa dizajneri i frontend" href="/projects/praksa-dizajerni-i-frontend?jump=repository"><span style="padding-left:0px;">Praksa dizajneri i frontend</span></a><a title="Praksa ekonomisti" href="/projects/praksa-ekonomisti?jump=repository"><span style="padding-left:0px;">Praksa ekonomisti</span></a><a title="eKonferencije - Tim marketing" href="/projects/ekonferencije-tim-marketing?jump=repository"><span style="padding-left:16px;">eKonferencije - Tim marketing</span></a><a title="F-Secure" href="/projects/f-secure2016?jump=repository"><span style="padding-left:16px;">F-Secure</span></a><a title="hosting i web" href="/projects/hosting-i-web?jump=repository"><span style="padding-left:16px;">hosting i web</span></a><a title="hrvatska travel" href="/projects/hrvatska-travel?jump=repository"><span style="padding-left:16px;">hrvatska travel</span></a><a title="Praksa podrška" href="/projects/praksa_podrska?jump=repository"><span style="padding-left:0px;">Praksa podrška</span></a><a title="web" href="/projects/praksa-web?jump=repository"><span style="padding-left:0px;">web</span></a><a title="dalmaris.eu" href="/projects/dalmaris-eu?jump=repository"><span style="padding-left:16px;">dalmaris.eu</span></a><a title="Потенцијални пројекти" href="/projects/potencijalni-projekti?jump=repository"><span style="padding-left:16px;">Потенцијални пројекти</span></a><a title="Праћење камера путем Андроид и иОС" href="/projects/pracenje-kamera?jump=repository"><span style="padding-left:0px;">Праћење камера путем Андроид и иОС</span></a><a title="Преговори" href="/projects/pregovori?jump=repository"><span style="padding-left:0px;">Преговори</span></a><a title="Привредна комора РС - сајт" href="/projects/privrednakomorars?jump=repository"><span style="padding-left:0px;">Привредна комора РС - сајт</span></a><a title="Продаја prodaja.bitlab.rs" href="/projects/prodaja-bitlab-rs?jump=repository"><span style="padding-left:0px;">Продаја prodaja.bitlab.rs</span></a><a title="РТРС" href="/projects/rtrsweb?jump=repository"><span style="padding-left:0px;">РТРС</span></a><a title="РТРС web" href="/projects/rtrs-web?jump=repository"><span style="padding-left:16px;">РТРС web</span></a><a title="РТРС Подршка" href="/projects/rtrs-podrska?jump=repository"><span style="padding-left:16px;">РТРС Подршка</span></a><a title="РТРС систем" href="/projects/rtrs-sistem?jump=repository"><span style="padding-left:16px;">РТРС систем</span></a><a title="Снимање" href="/projects/snimanje?jump=repository"><span style="padding-left:32px;">Снимање</span></a><a title="Управљање снимањем" href="/projects/upravljanje-snimanjem?jump=repository"><span style="padding-left:32px;">Управљање снимањем</span></a><a title="Сајт" href="/projects/sajt?jump=repository"><span style="padding-left:16px;">Сајт</span></a><a title="РТРС - MP4" href="/projects/mp4?jump=repository"><span style="padding-left:0px;">РТРС - MP4</span></a><a title="ТВ - Видео резач" href="/projects/tv-video-rezac?jump=repository"><span style="padding-left:16px;">ТВ - Видео резач</span></a><a title="Радници" href="/projects/radnici?jump=repository"><span style="padding-left:0px;">Радници</span></a><a title="Рибари" href="/projects/ribari?jump=repository"><span style="padding-left:0px;">Рибари</span></a><a title="Сервис" href="/projects/servis?jump=repository"><span style="padding-left:0px;">Сервис</span></a><a title="Солидарност" href="/projects/vanredno-stanje?jump=repository"><span style="padding-left:0px;">Солидарност</span></a><a title="Aндроид ванредно стање" href="/projects/android-vanjredno-stanje?jump=repository"><span style="padding-left:16px;">Aндроид ванредно стање</span></a><a title="Маркетинг апликација Солидарност" href="/projects/marketing-solidarnost?jump=repository"><span style="padding-left:16px;">Маркетинг апликација Солидарност</span></a><a title="Стоматолошка ординација" href="/projects/stomatoloska-ordinacija?jump=repository"><span style="padding-left:0px;">Стоматолошка ординација</span></a><a title="Телевизија - OTT платформе" href="/projects/televizija-ott?jump=repository"><span style="padding-left:0px;">Телевизија - OTT платформе</span></a><a title="Тендери" href="/projects/tenderi?jump=repository"><span style="padding-left:0px;">Тендери</span></a><a title="Термини Kukun" href="/projects/termini?jump=repository"><span style="padding-left:0px;">Термини Kukun</span></a><a title="Тест" href="/projects/test?jump=repository"><span style="padding-left:0px;">Тест</span></a><a title="Angular" href="/projects/test-angular?jump=repository"><span style="padding-left:16px;">Angular</span></a><a title="Топли оброк" href="/projects/restorani-hrana?jump=repository"><span style="padding-left:0px;">Топли оброк</span></a><a title="Ресторани - маркетинг" href="/projects/restorani-marketing?jump=repository"><span style="padding-left:16px;">Ресторани - маркетинг</span></a><a title="Ресторани - Мобилна" href="/projects/restorani-mobilna?jump=repository"><span style="padding-left:16px;">Ресторани - Мобилна</span></a><a title="ORDERA - збирна мобилна апликација" href="/projects/t-obrok-zbirna?jump=repository"><span style="padding-left:32px;">ORDERA - збирна мобилна апликација</span></a><a title="Proffesional ketering" href="/projects/proffesional-ketering?jump=repository"><span style="padding-left:32px;">Proffesional ketering</span></a><a title="ГРОШ - Ресторани-храна - мобилна" href="/projects/restorani-hrana-mobilna?jump=repository"><span style="padding-left:32px;">ГРОШ - Ресторани-храна - мобилна</span></a><a title="Ресторани-храна - WEB" href="/projects/restorani-hrana-web?jump=repository"><span style="padding-left:16px;">Ресторани-храна - WEB</span></a><a title="DEV.keteringzafirme.com" href="/projects/dev-keteringzafirme-com?jump=repository"><span style="padding-left:32px;">DEV.keteringzafirme.com</span></a><a title="grosbl.com" href="/projects/grosbl-com?jump=repository"><span style="padding-left:32px;">grosbl.com</span></a><a title="Ресторани - фронт" href="/projects/restorani-front?jump=repository"><span style="padding-left:32px;">Ресторани - фронт</span></a><a title="УРЦ  - нови сајт" href="/projects/urc-novi-sajt?jump=repository"><span style="padding-left:0px;">УРЦ  - нови сајт</span></a><a title="Успостављање предузећа" href="/projects/inov_pred?jump=repository"><span style="padding-left:0px;">Успостављање предузећа</span></a><a title="Финансије - Администрација" href="/projects/finasije?jump=repository"><span style="padding-left:0px;">Финансије - Администрација</span></a><a title="Финансије/Дужници" href="/projects/finansije-duznici?jump=repository"><span style="padding-left:16px;">Финансије/Дужници</span></a><a title="Хостинг BTGport.net" href="/projects/hosting-btgport-net?jump=repository"><span style="padding-left:0px;">Хостинг BTGport.net</span></a><a title="ПП" href="/projects/pp?jump=repository"><span style="padding-left:16px;">ПП</span></a><a title="Хостинг-Акција" href="/projects/hosting-akcija?jump=repository"><span style="padding-left:0px;">Хостинг-Акција</span></a><a title="Калкулатор - Гарантни фонд" href="/projects/garantni-fond?jump=repository"><span style="padding-left:0px;">Калкулатор - Гарантни фонд</span></a><a title="Канцеларијски послови" href="/projects/kancelarijski-poslovi?jump=repository"><span style="padding-left:0px;">Канцеларијски послови</span></a><a title="Мобилне апликације - повјерљиво" href="/projects/mobilne-aplikacije?jump=repository"><span style="padding-left:0px;">Мобилне апликације - повјерљиво</span></a><a title="Основна средства" href="/projects/osnovna-sredstva?jump=repository"><span style="padding-left:0px;">Основна средства</span></a><a title="Подршка - кетеринг за фирме" href="/projects/ketering-za-firme?jump=repository"><span style="padding-left:0px;">Подршка - кетеринг за фирме</span></a><a title="Пружни прелази - мапа" href="/projects/pruzni-prelazi-mapa?jump=repository"><span style="padding-left:0px;">Пружни прелази - мапа</span></a><a title="Савјетниц-обуке" href="/projects/savjetnici-obuke?jump=repository"><span style="padding-left:0px;">Савјетниц-обуке</span></a></div><div class="drdn-items all-projects selection"><a href="/projects?jump=repository">All Projects</a></div></div></div>
    </div>

    <h1><span class="breadcrumbs"><a class="root" href="/projects/node-js-server?jump=repository">node.js сервер</a><span class="separator"> &raquo; </span></span><span class="current-project">zaporodicu.org</span></h1>

    <div id="main-menu" class="tabs">
        <ul><li>
<a onclick="toggleNewObjectDropdown(); return false;" id="new-object" class="new-object" href="#"> + </a>
<ul class="menu-children"><li><a accesskey="7" class="new-issue-sub" href="/projects/zaporodicu-org/issues/new">New issue</a></li><li><a class="new-issue-category" href="/projects/zaporodicu-org/issue_categories/new">New category</a></li><li><a class="new-version" href="/projects/zaporodicu-org/versions/new">New version</a></li><li><a class="new-timelog" href="/projects/zaporodicu-org/time_entries/new">Log time</a></li><li><a class="new-news" href="/projects/zaporodicu-org/news/new">Add news</a></li><li><a class="new-document" href="/projects/zaporodicu-org/documents/new">New document</a></li><li><a class="new-wiki-page" href="/projects/zaporodicu-org/wiki/new">New wiki page</a></li><li><a class="new-file" href="/projects/zaporodicu-org/files/new">New file</a></li></ul>
</li><li><a class="overview" href="/projects/zaporodicu-org">Overview</a></li><li><a class="activity" href="/projects/zaporodicu-org/activity">Activity</a></li><li><a class="issues" href="/projects/zaporodicu-org/issues">Issues</a></li><li><a class="time-entries" href="/projects/zaporodicu-org/time_entries">Spent time</a></li><li><a class="gantt" href="/projects/zaporodicu-org/issues/gantt">Gantt</a></li><li><a class="calendar" href="/projects/zaporodicu-org/issues/calendar">Calendar</a></li><li><a class="news" href="/projects/zaporodicu-org/news">News</a></li><li><a class="documents" href="/projects/zaporodicu-org/documents">Documents</a></li><li><a class="wiki" href="/projects/zaporodicu-org/wiki">Wiki</a></li><li><a class="files" href="/projects/zaporodicu-org/files">Files</a></li><li><a class="repository selected" href="/projects/zaporodicu-org/repository">Repository</a></li><li><a class="settings" href="/projects/zaporodicu-org/settings">Settings</a></li></ul>
        <div class="tabs-buttons" style="display:none;">
            <button class="tab-left" onclick="moveTabLeft(this); return false;"></button>
            <button class="tab-right" onclick="moveTabRight(this); return false;"></button>
        </div>
    </div>
</div>

<div id="main" class="nosidebar">
    <div id="sidebar">
        
        
    </div>

    <div id="content">
        
        

<div class="contextual">
  
  <a class="icon icon-download" href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/raw/plugins/i18n.js">Download (509 Bytes)</a>

<a class="icon icon-stats" href="/projects/zaporodicu-org/repository/zaporodicu-org/statistics">Statistics</a>

<span class="drdn"><span class="drdn-trigger"><span class="icon-only icon-actions" title="Actions">Actions</span></span><div class="drdn-content"><div class="drdn-items">
  <a class="icon icon-settings" href="/projects/zaporodicu-org/settings/repositories">Settings</a>
  
</div></div></span>
<form id="revision_selector" action="/projects/zaporodicu-org/repository/zaporodicu-org/entry/plugins/i18n.js" accept-charset="UTF-8" name="revision_selector-710a4a24" method="get"><input name="utf8" type="hidden" value="&#x2713;" />  <!-- Branches Dropdown -->
    | Branch: 
    <select name="branch" id="branch"><option value="">&nbsp;</option>
<option selected="selected" value="master">master</option></select>


    | Revision: 
    <input type="text" name="rev" id="rev" value="master" size="8" />
</form>
</div>

<h2 class="breadcrumbs"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/show">zaporodicu-org</a><span class="separator">/</span><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/show/plugins">plugins</a><span class="separator">/</span><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/i18n.js">i18n.js</a> @ master</h2>




<div class="tabs">
  <ul>
    <li><a id="tab-entry" class="selected" href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/i18n.js">View</a></li>
    <li><a id="tab-changes" href="/projects/zaporodicu-org/repository/zaporodicu-org/changes/plugins/i18n.js?rev=master">History</a></li>
    <li><a id="tab-annotate" href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/annotate/plugins/i18n.js">Annotate</a></li>
  </ul>
  <div class="tabs-buttons" style="display:none;">
    <button class="tab-left" type="button" onclick="moveTabLeft(this);"></button>
    <button class="tab-right" type="button" onclick="moveTabRight(this);"></button>
  </div>
</div>

  
  
  






  <div class="autoscroll">
<table class="filecontent syntaxhl">
<tbody>
  <tr id="L1">
    <th class="line-num">
      <a href="#L1">1</a>
    </th>
    <td class="line-code">
      <pre><span class="k">import</span> <span class="nx">Vue</span> <span class="k">from</span> <span class="dl">'</span><span class="s1">vue</span><span class="dl">'</span>
</pre>
    </td>
  </tr>
  <tr id="L2">
    <th class="line-num">
      <a href="#L2">2</a>
    </th>
    <td class="line-code">
      <pre><span class="k">import</span> <span class="nx">VueI18n</span> <span class="k">from</span> <span class="dl">'</span><span class="s1">vue-i18n</span><span class="dl">'</span>
</pre>
    </td>
  </tr>
  <tr id="L3">
    <th class="line-num">
      <a href="#L3">3</a>
    </th>
    <td class="line-code">
      <pre>
</pre>
    </td>
  </tr>
  <tr id="L4">
    <th class="line-num">
      <a href="#L4">4</a>
    </th>
    <td class="line-code">
      <pre><span class="nx">Vue</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">VueI18n</span><span class="p">);</span>
</pre>
    </td>
  </tr>
  <tr id="L5">
    <th class="line-num">
      <a href="#L5">5</a>
    </th>
    <td class="line-code">
      <pre>
</pre>
    </td>
  </tr>
  <tr id="L6">
    <th class="line-num">
      <a href="#L6">6</a>
    </th>
    <td class="line-code">
      <pre><span class="k">export</span> <span class="k">default</span> <span class="p">({</span> <span class="nx">app</span><span class="p">,</span> <span class="nx">store</span> <span class="p">})</span> <span class="o">=&gt;</span> <span class="p">{</span>
</pre>
    </td>
  </tr>
  <tr id="L7">
    <th class="line-num">
      <a href="#L7">7</a>
    </th>
    <td class="line-code">
      <pre>  <span class="nx">app</span><span class="p">.</span><span class="nx">i18n</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">VueI18n</span><span class="p">({</span>
</pre>
    </td>
  </tr>
  <tr id="L8">
    <th class="line-num">
      <a href="#L8">8</a>
    </th>
    <td class="line-code">
      <pre>    <span class="na">locale</span><span class="p">:</span> <span class="nx">store</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">locale</span><span class="p">,</span>
</pre>
    </td>
  </tr>
  <tr id="L9">
    <th class="line-num">
      <a href="#L9">9</a>
    </th>
    <td class="line-code">
      <pre>    <span class="na">fallbackLocale</span><span class="p">:</span> <span class="dl">'</span><span class="s1">sr</span><span class="dl">'</span><span class="p">,</span>
</pre>
    </td>
  </tr>
  <tr id="L10">
    <th class="line-num">
      <a href="#L10">10</a>
    </th>
    <td class="line-code">
      <pre>    <span class="na">messages</span><span class="p">:</span> <span class="p">{</span>
</pre>
    </td>
  </tr>
  <tr id="L11">
    <th class="line-num">
      <a href="#L11">11</a>
    </th>
    <td class="line-code">
      <pre>      <span class="na">sr</span><span class="p">:</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">~/locales/sr.json</span><span class="dl">'</span><span class="p">),</span>
</pre>
    </td>
  </tr>
  <tr id="L12">
    <th class="line-num">
      <a href="#L12">12</a>
    </th>
    <td class="line-code">
      <pre>      <span class="na">en</span><span class="p">:</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">~/locales/en.json</span><span class="dl">'</span><span class="p">),</span>
</pre>
    </td>
  </tr>
  <tr id="L13">
    <th class="line-num">
      <a href="#L13">13</a>
    </th>
    <td class="line-code">
      <pre>      <span class="na">lat</span><span class="p">:</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">~/locales/lat.json</span><span class="dl">'</span><span class="p">),</span>
</pre>
    </td>
  </tr>
  <tr id="L14">
    <th class="line-num">
      <a href="#L14">14</a>
    </th>
    <td class="line-code">
      <pre>    <span class="p">}</span>
</pre>
    </td>
  </tr>
  <tr id="L15">
    <th class="line-num">
      <a href="#L15">15</a>
    </th>
    <td class="line-code">
      <pre>  <span class="p">});</span>
</pre>
    </td>
  </tr>
  <tr id="L16">
    <th class="line-num">
      <a href="#L16">16</a>
    </th>
    <td class="line-code">
      <pre>
</pre>
    </td>
  </tr>
  <tr id="L17">
    <th class="line-num">
      <a href="#L17">17</a>
    </th>
    <td class="line-code">
      <pre>  <span class="nx">app</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">path</span> <span class="o">=</span> <span class="p">(</span><span class="nx">link</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>
</pre>
    </td>
  </tr>
  <tr id="L18">
    <th class="line-num">
      <a href="#L18">18</a>
    </th>
    <td class="line-code">
      <pre>    <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">locale</span> <span class="o">===</span> <span class="nx">app</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">fallbackLocale</span><span class="p">)</span> <span class="p">{</span>
</pre>
    </td>
  </tr>
  <tr id="L19">
    <th class="line-num">
      <a href="#L19">19</a>
    </th>
    <td class="line-code">
      <pre>      <span class="k">return</span> <span class="s2">`/</span><span class="p">${</span><span class="nx">link</span><span class="p">}</span><span class="s2">`</span>
</pre>
    </td>
  </tr>
  <tr id="L20">
    <th class="line-num">
      <a href="#L20">20</a>
    </th>
    <td class="line-code">
      <pre>    <span class="p">}</span>
</pre>
    </td>
  </tr>
  <tr id="L21">
    <th class="line-num">
      <a href="#L21">21</a>
    </th>
    <td class="line-code">
      <pre>
</pre>
    </td>
  </tr>
  <tr id="L22">
    <th class="line-num">
      <a href="#L22">22</a>
    </th>
    <td class="line-code">
      <pre>    <span class="k">return</span> <span class="s2">`/</span><span class="p">${</span><span class="nx">app</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">locale</span><span class="p">}</span><span class="s2">/</span><span class="p">${</span><span class="nx">link</span><span class="p">}</span><span class="s2">`</span>
</pre>
    </td>
  </tr>
  <tr id="L23">
    <th class="line-num">
      <a href="#L23">23</a>
    </th>
    <td class="line-code">
      <pre>  <span class="p">}</span>
</pre>
    </td>
  </tr>
  <tr id="L24">
    <th class="line-num">
      <a href="#L24">24</a>
    </th>
    <td class="line-code">
      <pre><span class="p">}</span>
</pre>
    </td>
  </tr>
</tbody>
</table>
</div>


<span class="pagination filepreview">
  <ul class="pages"><li class="previous page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/convert.js">« Previous</a></li><li class="page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/README.md">1</a></li><li class="page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/convert-inject.js">2</a></li><li class="page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/convert.js">3</a></li><li class="current"><span>4</span></li><li class="page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/latin-to-cyrillic.js">5</a></li><li class="page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/vue-carousel.js">6</a></li><li class="next page"><a href="/projects/zaporodicu-org/repository/zaporodicu-org/revisions/master/entry/plugins/latin-to-cyrillic.js">Next »</a></li></ul><span><span class="items">(4-4/6)</span> </span>
</span>


        
        <div style="clear:both;"></div>
    </div>
</div>
<div id="footer">
    Powered by <a href="https://www.redmine.org/">Redmine</a> &copy; 2006-2021 Jean-Philippe Lang
</div>
</div>

<div id="ajax-indicator" style="display:none;"><span>Loading...</span></div>
<div id="ajax-modal" style="display:none;"></div>

</div>
</div>
<script>
//<![CDATA[
setSelect2Filter('contact', {"format_state":"formatStateWithAvatar","min_input_length":1,"url":"/auto_completes/contacts"});
//]]>
</script>

<script>
//<![CDATA[
setSelect2Filter('company', {"format_state":"formatStateWithAvatar","min_input_length":1,"url":"/auto_completes/contacts?is_company=true"});
//]]>
</script>

<!-- <PRO> -->
<script>
//<![CDATA[
setSelect2Filter('deal', {"format_state":"formatStateWithAvatar","min_input_length":1,"url":"/auto_completes/deals"});
//]]>
</script>
<!-- </PRO> -->

<script>
//<![CDATA[
setSelect2Filter('contact_tags', {"url":"/auto_completes/contact_tags?project_id=zaporodicu-org"});
//]]>
</script>
 <script>
//<![CDATA[
setSelect2Filter('assignee', {"url":"/auto_completes/assignee?project_id=zaporodicu-org","multiple":true});
//]]>
</script>

</body>
</html>
