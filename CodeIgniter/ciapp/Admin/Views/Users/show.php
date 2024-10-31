<?= $this->extend("layouts/default") ?>

<?= $this->section("title") ?>User<?= $this->endSection() ?>

<?= $this->section("content") ?>

<h1>Users</h1>

<dl>
	<dt>email</dt>
	<dd><?= esc($user->email) ?></dd>

	<dt>First name</dt>
	<dd><?= esc($user->username) ?></dd>

	<dt>Created</dt>
	<dd><?= $user->created_at->humanize() ?></dd>

	<dt>Groups</dt>
	<dd>
		<?= implode(", ", $user->getGroups()) ?>
		<a href="<?= url_to("\Admin\Controllers\Users::groups", $user->id) ?>">edit</a>
	</dd>
</dl>

<?= form_open("admin/users/".$user->id."/toggle-ban") ?>

	<button><?= $user->isBanned() ? "Unban" : "Ban" ?></button>

</form>



<?= $this->endSection() ?>