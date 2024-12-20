<?= $this->extend("layouts/default") ?>

<?= $this->section("title") ?>Articles<?= $this->endSection() ?>

<?= $this->section("content") ?>

	<h1>Welcome to Articles</h1>

	<a href="<?= url_to("Articles::new") ?>">New</a>

	<?php foreach ($articles as $article): ?>
		<h2><a href="<?= site_url('/articles/'.$article->id) ?>"><?= esc($article->title) ?></a></h2>
		<p><?= esc($article->content) ?></p>
	<?php endforeach ?>	

<?= $this->endSection() ?>
	
