<?php echo $header; ?>
<?php echo $column_left; ?>
<?php echo $column_right; ?>
<div class="wrapper wrapper-message" <?php if(trim($column_left) != '' && trim($column_right) != '') : ?>id="content"<?php endif; ?>><?php echo $content_top; ?>
  <h1><?php echo $heading_title; ?></h1>
  <?php echo $text_message; ?>
  <a href="<?php echo $continue; ?>" class="button"><?php echo $button_continue; ?></a>
  
  <?php echo $content_bottom; ?></div>
<?php echo $footer; ?>
<style>
  .wrapper-message {
    text-align: center;
    padding: 50px 0;
  }
  .wrapper-message h1 {
    line-height: normal;
    margin-bottom: 20px;
  }
  .wrapper-message .button {
    margin-top: 20px;
  }
</style>