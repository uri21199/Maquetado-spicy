
	// Registro | Contador
	var state = 1;

	function siguiente(){
		if(state < 4) state ++;
		// else state = 1;
	
		if (state == 1){
			show1();
			}
		
		if (state == 2){
			show2();        
		}
	
		if (state == 3){
			show3();        
		}

		if (state == 4){
			show4();        
		}
		console.log(state);
	}

	function show1(){
        // datos personales
        document.getElementById('first-section').style.display='flex';
		document.getElementById('second-section').style.display='none';
		document.getElementById('three-section').style.display='none';
		document.getElementById('four-section').style.display='none';
	}

	function show2(){
		// encuesta
        document.getElementById('first-section').style.display='none';
		document.getElementById('second-section').style.display='flex';
		document.getElementById('three-section').style.display='none';
		document.getElementById('four-section').style.display='none';
	}

	function show3(){
		// check
		document.getElementById('first-section').style.display='none';
		document.getElementById('second-section').style.display='none';
		document.getElementById('three-section').style.display='flex';
		document.getElementById('four-section').style.display='none';
	}

	function show4(){
		// Configurá tu cuenta
		document.getElementById('first-section').style.display='none';
		document.getElementById('second-section').style.display='none';
		document.getElementById('three-section').style.display='none';
		document.getElementById('four-section').style.display='flex';
	}


	// Menú Responsive

	function openMenu(){
		document.getElementById('menu-lateral').style.display='block';
		document.getElementById('background-menu').style.display='block';
	}

	function closeMenu(){
		document.getElementById('menu-lateral').style.display='none';
		document.getElementById('background-menu').style.display='none';
	}

