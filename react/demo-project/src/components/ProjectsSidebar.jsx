import Button from "./Button";

export default function ProjectSidebar({onStartAddProject}) {


	let asideStyles = "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
	let h2Styles = "mb-8 font-bold uppercase md:text-xl text-stone-200";
	


	return(
		<aside className={asideStyles}>
			<h2 className={h2Styles}>Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul>

			</ul>
		</aside>
	)
}