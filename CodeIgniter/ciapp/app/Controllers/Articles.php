<?php

namespace App\Controllers;

use App\Models\ArticleModel;
use App\Entities\Article;
use CodeIgniter\Exceptions\PageNotFoundException;

class Articles extends BaseController
{

	private ArticleModel $model;

	public function __construct(){
		$this->model = new ArticleModel;
	}

	public function index(){

		// $db = db_connect();
		// $db->listTables();
		// $model = new ArticleModel;
		$data = $this->model->findAll();
		// dd($data);

		return view("Articles/index", [
			"articles" => $data
		]);
	}

	public function show($id){
		
		$article = $this->getArticleOr404($id);

		return view("Articles/show", [
			"article" => $article
		]);
	
	}

	public function new() {

		

		return view("Articles/new", [
			"article" => new Article
		]);
	}

	public function create(){

		// $model = new ArticleModel;

		$article = new Article($this->request->getPost());

		$id = $this->model->insert($article);

		if($id === false){
			return redirect()->back()
							->with("errors", $this->model->errors())
							->withInput();
		}

		return redirect()->to("articles/$id")
						->with("message", "Article saved.");

	}

	public function edit($id){
		// $model = new ArticleModel;

		$article = $this->getArticleOr404($id);

		return view("Articles/edit", [
			"article" => $article
		]);
	}

	public function update($id){
		// $model = new ArticleModel;

		$article = $this->getArticleOr404($id);
		$article->fill($this->request->getPost());

		if( !$article->hasChanged()){
			return redirect() ->back()
								->with("message", "Nothing to update.");
		}

		if($this->model->save($article)){
			return redirect()->to("articles/$id")
						->with("message", "Article updated.");
		}else{
			return redirect()->back()
							->with("errors", $this->model->errors())
							->withInput();
		}
	}

	public function delete($id){
		$article = $this->getArticleOr404($id);

		if($this->request->is("post")) {
			$this->model->delete($id);

			return redirect()->to("articles")
								->with("message", "Article deleted!");
		}

		return view("Articles/delete", [
			"article" => $article
		]);
	}

	private function getArticleOr404($id): Article{
		$article = $this->model->find($id);
		if($article === null) {
			throw new PageNotFoundException("Article with id $id not found");

		}

		return $article;
	}

}