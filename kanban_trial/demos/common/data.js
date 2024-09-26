function getData() {
	const users = [
		{
			id: 1,
			label: "Steve Smith",
			avatar: "../assets/user.jpg",
		},
		{
			id: 2,
			label: "Aaron Long",
			avatar: "../assets/user-2.jpg",
		},
		{
			id: 3,
			label: "Angela Allen",
			avatar: "../assets/user-3.jpg",
		},
		{
			id: 4,
			label: "Angela Long",
			avatar: "../assets/user-4.jpg",
		},
	];

	const cardShape = {
		label: true,
		description: true,
		progress: true,
		start_date: true,
		end_date: true,
		users: {
			show: true,
			values: users,
		},
		priority: {
			show: true,
			values: [
				{ id: 1, color: "#FF5252", label: "High" },
				{ id: 2, color: "#FFC975", label: "Medium" },
				{ id: 3, color: "#65D3B3", label: "Low" },
			],
		},
		color: true,
		menu: true,
		cover: true,
		attached: false,
	};

	const columns = [
		{
			label: "Backlog",
			id: "backlog",
		},
		{
			label: "In progress",
			id: "inprogress",
		},
		{
			label: "Testing",
			id: "testing",
		},
		{
			label: "Done",
			id: "done",
		},
	];

	const rows = [
		{
			label: "Feature",
			id: "feature",
		},
		{
			label: "Task",
			id: "task",
		},
	];

	const cards = [
		{
			id: 1,
			label: "Integration with Angular/React",
			priority: 1,
			color: "#65D3B3",
			start_date: new Date("01/07/2021"),
			users: [3, 2],
			column: "backlog",
			type: "feature",
			comments: [
				{
					id: 1,
					userId: 1,
					cardId: 1,
					text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. ",
					date: new Date(),
				},
				{
					id: 2,
					userId: 2,
					cardId: 1,
					text: "Hi, Aaron. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result.",
					date: new Date(),
				},
			],
			votes: [1, 3, 4],
		},
		{
			id: 2,
			label: "Archive the cards/boards ",
			priority: 3,
			color: "#58C3FE",
			users: [4],
			progress: 1,
			column: "backlog",
			type: "feature",
		},
		{
			id: 3,
			label: "Searching and filtering",
			priority: 1,
			color: "#58C3FE",
			start_date: new Date("01/09/2021"),
			users: [3, 1],
			progress: 1,
			column: "backlog",
			type: "task",
		},
		{
			id: 4,
			label: "Set the tasks priorities",
			color: "#FFC975",
			start_date: new Date("12/21/2020"),
			users: [4],
			progress: 75,
			column: "inprogress",
			type: "feature",
			attached: [
				{
					isCover: true,
					coverURL: "../assets/img-1.jpg",
					previewURL: "../assets/img-1.jpg",
					url: "../assets/img-1.jpg",
					name: "img-1.jpg",
				},
			],
		},
		{
			id: 5,
			label: "Custom icons",
			color: "#65D3B3",
			start_date: new Date("01/07/2021"),
			users: [3, 2],
			column: "inprogress",
			type: "task",
		},
		{
			id: 6,
			label: "Integration with Gantt",
			color: "#FFC975",
			start_date: new Date("12/21/2020"),
			users: [4],
			progress: 75,
			column: "inprogress",
			type: "task",
		},
		{
			id: 7,
			label: "Drag and drop",
			priority: 1,
			color: "#58C3FE",
			users: [3, 1],
			progress: 100,
			column: "testing",
			type: "feature",
		},
		{
			id: 8,
			label: "Adding images",
			color: "#58C3FE",
			users: [4],
			column: "testing",
			type: "task",
			attached: [
				{
					isCover: true,
					coverURL: "../assets/img-2.jpg",
					previewURL: "../assets/img-2.jpg",
					url: "../assets/img-2.jpg",
					name: "img-2.jpg",
				},
			],
		},
		{
			id: 9,
			label: "Create cards and lists from the UI and from code",
			priority: 3,
			color: "#65D3B3",
			start_date: new Date("01/07/2021"),
			users: [3, 2],
			column: "done",
			type: "feature",
		},
		{
			id: 10,
			label: "Draw swimlanes",
			color: "#FFC975",
			users: [2],
			column: "done",
			type: "feature",
		},
		{
			id: 11,
			label: "Progress bar",
			priority: 1,
			color: "#FFC975",
			start_date: new Date("12/9/2020"),
			users: [1, 4, 3],
			progress: 100,
			column: "done",
			type: "task",
		},
	];

	const groupData = [
		{ id: "column", label: "Column", columns },
		{
			id: "sprint",
			label: "Sprint",
			columns: [
				{ id: "1.0", label: "1.0" },
				{ id: "1.1", label: "1.1" },
				{ id: "1.2", label: "1.2" },
			],
		},
		{
			id: "type",
			label: "Type",
			columns: [
				{ id: "feature", label: "Feature" },
				{ id: "task", label: "Task" },
			],
		},
		{
			id: "priority",
			label: "Priority",
			columns: [
				{ id: 1, label: "High" },
				{ id: 2, label: "Medium" },
				{ id: 3, label: "Low" },
			],
		},
	];

	const links = [
		{
			id: 1,
			masterId: 1,
			slaveId: 3,
			relation: "parent",
		},
		{
			id: 3,
			masterId: 1,
			slaveId: 3,
			relation: "duplicate",
		},
		{
			id: 4,
			masterId: 2,
			slaveId: 1,
			relation: "relatesTo",
		},
	];

	return {
		rows,
		columns,
		cards,
		users,
		cardShape,
		groupData,
		links,
	};
}
