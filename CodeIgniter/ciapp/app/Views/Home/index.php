<?= $this->extend("layouts/default") ?>

<?= $this->section("title") ?>Home<?= $this->endSection() ?>

<?= $this->section("content") ?>

	<h1>Welcome, <?= esc($username) ?>!</h1>

	

<?= $this->endSection() ?>
	
</body>
</html>