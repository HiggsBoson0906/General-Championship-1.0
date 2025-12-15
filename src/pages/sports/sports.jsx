import React, { useState } from "react";
import SportsSection from "./components/SportsSection";
import TableComponent from "./components/table";
import TargetCursor from "../../components/cursor/targetcursor";
import "../../App.css";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Divider,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import getSportsData from "./utils/sports";
export default function Sports() {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [selectedSportData, setSelectedSportData] = useState(null);
	const [selectedSportName, setSelectedSportName] = useState("");

	/////////////////////////////
	const data = getSportsData();
	console.log(data);
	/////////////////////////////

	// --- Click Handlers ---

	const handleSportClick = async (game) => {
		try {
			const module = await import(`../../data/${game.title.toLowerCase()}.js`);
			setSelectedSportData(module.default);
			setSelectedSportName(game.title);
			setPopupOpen(true);
		} catch (error) {
			alert(`Could not find data for ${game.title}.`);
		}
	};

	const handleClosePopup = () => {
		setPopupOpen(false);
	};

	return (
		
		<section >
			{/** Background */}
			<div className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#f6ede3]">
				<div className="content">
					<h1 className="text-amber-950 text-center text-4xl pt-4 pl-8 pb-2 font-bold font-[Brave81] tracking-wide">SPORTS</h1>

					{/**Card Component Traversing */}
					<SportsSection handleSportClick={handleSportClick} />
					<Dialog
						open={isPopupOpen}
						onClose={handleClosePopup}
						fullWidth={true}
						maxWidth='sm'
						sx={{ backdropFilter: "blur(2px)", m: 0 }}
						PaperProps={{
							sx: (theme) => ({
								borderRadius: "40px",
								[theme.breakpoints.down("sm")]: {
									margin: 0,
									width: "96%",
								},
							}),
						}}>
						<IconButton
							aria-label='close'
							onClick={handleClosePopup}
							sx={{
								position: "absolute",
								right: 12,
								top: 12,
								color: "#946F2C",
								zIndex: 2,
							}}>
							<CloseIcon />
						</IconButton>
						<div className='popup-container' >
							<DialogTitle ><h1 className=" font-[Brave81]">{selectedSportName} Table</h1></DialogTitle>
							<Divider
								sx={{
									borderColor: "#946F2C",
									borderBottomWidth: 2,
									margin: "0 0 10px 0",
								}}
							/>

							<DialogContent >
								{<TableComponent teams={selectedSportData} />}
							</DialogContent>
						</div>
					</Dialog>
				</div>
			</div>
			</section>
		
	);
}
