<?
$title = "Hello First Page";

$content = <<<END

<div class="row">
  <div class="col-md-8 col-sm-12 col-xs-12">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <p>
          <i class="fa fa-camera-retro fa-5x"></i><br />
          "Font Awesome" is included!
        </p>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-6">
        <p>
          <i class="zmdi zmdi-camera zmdi-hc-5x"></i><br />
          "Material Design Iconic Font" is also included!
        </p>
      </div>
    </div>

    <p class="pad-top">
      Hello Page!
    </p>
  </div>

  <div class="col-md-4 col-sm-12 col-xs-12">
    Sidebar is here
  </div>
</div>

END;

include __DIR__ . '/layouts/default.php';
