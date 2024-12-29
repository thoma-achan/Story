       function checkAuthentication() {
            if (localStorage.getItem('authenticated') !== 'true') {
                window.location.href = 'index.html';
            }
        }

        function logoutOrRedirect() {
            if (localStorage.getItem('role') !== 'admin') {
		localStorage.removeItem('authenticated');
                window.location.href = 'index.html';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            checkAuthentication();

            // Automatically log out or redirect after 5 seconds (for demo purposes, adjust as needed)
            setTimeout(logoutOrRedirect, 60000);
        });


        // Fetch IP address from the API
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
         const currentIP = data.ip;
	
         // Display the current IP
         document.getElementById('ip-address').textContent = `Your IP Address is: ${currentIP}`;
         })
         .catch(error => {
             document.getElementById('ip-address').textContent = "Unable to fetch IP address.";
             console.error('Error fetching IP:', error);
          });
	var username = localStorage.getItem('role');
        document.getElementById('username').textContent = "Hello " + username + " ! ";







			const galleryData = [
				    { imgSrc: "img/gallery-1.jpg", date: "10/01/2022", description: "First Meeting" },
				    { imgSrc: "img/gallery-2.jpg", date: "14/10/2022", description: "First Lip lock" },
				    { imgSrc: "img/gallery-3.jpg", date: "22/01/2022", description: "Same Mind" },
				    { imgSrc: "img/gallery-4.jpg", date: "29/01/2022", description: "At Home" },
				    { imgSrc: "img/gallery-5.jpg", date: "25/01/2022", description: "Both On Uniform" },
				    { imgSrc: "img/gallery-6.jpg", date: "01/03/2022", description: "Long Travel" },
				    { imgSrc: "img/gallery-7.jpg", date: "04/04/2022", description: "35 Days Gap" },
				    { imgSrc: "img/gallery-8.jpg", date: "07/04/2022", description: "100 Days" },
				    { imgSrc: "img/gallery-9.jpg", date: "24/05/2022", description: "44 days met" },
				    { imgSrc: "img/gallery-10.jpg", date: "31/05/2022", description: "Lunch Together" },
				    { imgSrc: "img/gallery-11.jpg", date: "07/06/2022", description: "Single plate food" },
				    { imgSrc: "img/gallery-12.jpg", date: "11/07/2022", description: "Normal Meeting" },
				    { imgSrc: "img/gallery-13.jpg", date: "10/08/2022", description: "Simple Meeting" },
				    { imgSrc: "img/gallery-14.jpg", date: "02/09/2022", description: "MeetingFatherinlaw" },
				    { imgSrc: "img/gallery-15.jpg", date: "05/09/2022", description: "Manarcad Church" },
				    { imgSrc: "img/gallery-16.jpg", date: "14/09/2022", description: "Simple Meeting" },
				    { imgSrc: "img/gallery-17.jpg", date: "29/09/2022", description: "Simple Fight" },
				    { imgSrc: "img/gallery-18.jpg", date: "01/10/2022", description: "Travel to TVM" },
				    { imgSrc: "img/gallery-19.jpg", date: "05/10/2022", description: "TrivandrumMuseum" },
				    { imgSrc: "img/gallery-20.jpg", date: "09/11/2022", description: "FirstMovieTogether" },
				    { imgSrc: "img/gallery-21.jpg", date: "24/11/2022", description: "1 min meeting" },
				    { imgSrc: "img/gallery-22.jpg", date: "01/12/2022", description: "Meeting friends" },
				    { imgSrc: "img/gallery-23.jpg", date: "07/12/2022", description: "Simple Meeting" },
				    { imgSrc: "img/gallery-24.jpg", date: "20/12/2022", description: "Simple Meeting" },
				    { imgSrc: "img/gallery-25.jpg", date: "28/12/2022", description: "First Anniversary" },
				    { imgSrc: "img/gallery-26.jpg", date: "03/01/2023", description: "NewYearFirstMeet" },
				    { imgSrc: "img/gallery-27.jpg", date: "03/02/2023", description: "Long Wait" },
				    { imgSrc: "img/gallery-28.jpg", date: "14/02/2023", description: "Valentines Day" },
				    { imgSrc: "img/gallery-29.jpg", date: "27/02/2023", description: "Adventure Park" },
				    { imgSrc: "img/gallery-30.jpg", date: "29/03/2023", description: "Movie Time" },
				    { imgSrc: "img/gallery-31.jpg", date: "13/04/2023", description: "Court Visit" },
				    { imgSrc: "img/gallery-32.jpg", date: "01/05/2023", description: "At Thodupuzha" },
				    { imgSrc: "img/gallery-33.jpg", date: "15/05/2023", description: "500 Days" },
				    { imgSrc: "img/gallery-34.jpg", date: "25/06/2023", description: "Entering a job" },
				    { imgSrc: "img/gallery-35.jpg", date: "07/07/2023", description: "Shopping Lulu" },
				    { imgSrc: "img/gallery-36.jpg", date: "25/07/2023", description: "A small Fight" },
				    { imgSrc: "img/gallery-37.jpg", date: "27/07/2023", description: "Shopping at Lulu" },
				    { imgSrc: "img/gallery-38.jpg", date: "31/07/2023", description: "Period Day" },
				    { imgSrc: "img/gallery-39.jpg", date: "08/08/2023", description: "Simple meeting" },
				    { imgSrc: "img/gallery-40.jpg", date: "11/08/2023", description: "Off to home" },
				    { imgSrc: "img/gallery-41.jpg", date: "18/08/2023", description: "Loan Dispersal" },
				    { imgSrc: "img/gallery-42.jpg", date: "22/08/2023", description: "Morning Meeting" },
				    { imgSrc: "img/gallery-43.jpg", date: "24-26/08/2023", description: "Onam At College" },
				    { imgSrc: "img/gallery-44.jpg", date: "04/09/2023", description: "Small Purcahses" },
				    { imgSrc: "img/gallery-45.jpg", date: "08/09/2023", description: "walk With Her" },
				    { imgSrc: "img/gallery-46.jpg", date: "11/09/2023", description: "Funtura @ Lulu" },
				    { imgSrc: "img/gallery-47.jpg", date: "12/09/2023", description: "Exploring Meseum" },
				    { imgSrc: "img/gallery-48.jpg", date: "16/08/2023", description: "Wax Meseum" },
				    { imgSrc: "img/gallery-49.jpg", date: "26/09/2023", description: "Meseum Days" },
				    { imgSrc: "img/gallery-50.jpg", date: "21/10/2023", description: "Aquarium Visit" },
				    { imgSrc: "img/gallery-51.jpg", date: "02/11/2023", description: "Pulpel Shopping" },
				    { imgSrc: "img/gallery-52.jpg", date: "21/11/2023", description: "Specs Purchase" },
				    { imgSrc: "img/gallery-53.jpg", date: "25/11/2023", description: "Venjaramood Day" },
				    { imgSrc: "img/gallery-54.jpg", date: "27/11/2023", description: "Specs Day" },
				    { imgSrc: "img/gallery-55.jpg", date: "06/12/2023", description: "MOT Days" },
				    { imgSrc: "img/gallery-56.jpg", date: "20/12/2023", description: "With Brother" },
				    { imgSrc: "img/gallery-57.jpg", date: "12/01/2024", description: "Ozler Watch" },
				    { imgSrc: "img/gallery-58.jpg", date: "14/02/2024", description: "Valentines Day" },
				    { imgSrc: "img/gallery-59.jpg", date: "20/02/2024", description: "Arts College" },
				    { imgSrc: "img/gallery-60.jpg", date: "04/03/2024", description: "Manjummel Boys" },
				    { imgSrc: "img/gallery-61.jpg", date: "20/04/2024", description: "With Sibilings" },
				    { imgSrc: "img/gallery-62.jpg", date: "26/09/2023", description: "Fight After Fight" },
				    { imgSrc: "img/gallery-63.jpg", date: "04/07/2024", description: "TC Day" },
				    { imgSrc: "img/gallery-64.jpg", date: "14/09/2024", description: "Shopping Day" },
				    { imgSrc: "img/gallery-65.jpg", date: "16/09/2024", description: "PC Day" },
				    { imgSrc: "img/gallery-66.jpg", date: "24/11/2024", description: "Long time nosee" },
				    { imgSrc: "img/gallery-67.jpg", date: "26/11/2024", description: "Champakka day" },
				    { imgSrc: "img/gallery-68.jpg", date: "04/12/2024", description: "Gift day" },
				    { imgSrc: "img/gallery-69.jpg", date: "22/12/2024", description: "AIBE Exam" },
				    { imgSrc: "img/gallery-70.jpg", date: "28/12/2024", description: "3Year Anniversary" },
					    
				    ];
				
