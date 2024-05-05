document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});

class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="container-fluid p-0">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="logo">
                        <img src="./img/logo.png" alt="" height="50px">
                    </div>
                </div>
                <div class="col-sm-5 div">
                    <strong class="float-end">
                        ISO 9001 : 2015 Certified &
                        <br>
                        W.B Govt. Certified Institute
                    </strong>
                </div>
                <div class="col-sm-3 div">
                    <ul class="list-unstyled">
                        <li class="">
                            <strong class="float-end">Call us : 
                            <a href="tel:918697800167" class="text-decoration-none float-end">+91 8697800167</a>
                            <br>
                            <a href="tel:918583928127" class="text-decoration-none float-end">+91 8583928127</a></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0 bg-warning">
        <div class="container p-0">
            <div class="row">
                <nav class="navbar navbar-expand-md navbar-light col-lg-9">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="text-white">Home</span>
                        <i class="fas fa-bars" style="color: #fff;"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-white active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown has-megamenu">
                                <a class="nav-link text-white dropdown-toggle" href="courses.html" id="navbarDropdown" role="button">
                                    Courses
                                </a>
                                <div class="dropdown-menu megamenu bg-light" role="menu" aria-labelledby="navbarDropdown">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <ul class="list-unstyled">
                                                    <li><a href="ism.html" class="text-decoration-none">
                                                        <h6 class="text-muted"><i class="fas fa-plus"></i><strong>
                                                                HEALTH &
                                                                SAFETY</strong></h6></a>
                                                    </li>
                                                    <li><a href="neboshigc.html" class="text-decoration-none text-dark">NEBOSH IGC</a></li>
                                                    <li><a href="ism.html" class="text-decoration-none text-dark">INDUSTRIAL SAFETY MANAGEMENT</a></li>
                                                    <li><a href="fsm.html" class="text-decoration-none text-dark">FIRE SAFETY MANAGEMEN</a>T</li>
                                                    <li><a href="adis.html" class="text-decoration-none text-dark">ADVANCED DIPLOMA IN INDUSTRIAL SAFETY (ADIS)</a></li>
                                                    <li><a href="pgdism.html" class="text-decoration-none text-dark">POST GRADUATE DIPLOMA IN INDUSTRIAL SAFETY (PGDISM)</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <ul class="list-unstyled">
                                                    <li><a href="hvaceng.html" class="text-decoration-none">
                                                        <h6 class="text-muted"><i class="fas fa-wrench"></i><strong>
                                                                HVAC</strong></h6></a>
                                                    </li>
                                                    <li><a href="hvaceng.html" class="text-decoration-none text-dark">HVAC ENGINEERING</a></li>
                                                    <li><a href="hvactech.html" class="text-decoration-none text-dark">HVAC TECHNICIAN</a></li>
                                                    <li><a href="hvacsup.html" class="text-decoration-none text-dark">SUPERVISOR / FOREMAN</a></li>
                                                    <li><a href="hvacd&p.html" class="text-decoration-none text-dark">HVAC DESIGN AND PLANNING ENGINEERING</a></li>
                                                    <li><a href="p6.html" class="text-decoration-none text-dark">PRIMAVERA P6 TRAINING (Planning Engineering)</a></li>
                                                    <li><a href="ac&r.html" class="text-decoration-none text-dark">AC AND REFRIGERATION TECHNICIAN</a></li>
                                                    <li><a href="autocad.html" class="text-decoration-none text-dark">AUTOCAD</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <ul class="list-unstyled">
                                                    <li><a href="inst.html" class="text-decoration-none">
                                                        <h6 class="text-muted"><i class="fas fa-hammer"></i><strong>
                                                                ELECTRICAL & INSTRUMENT</strong></h6></a>
                                                    </li>
                                                    <li><a href="inst.html" class="text-decoration-none text-dark">Instrument Technician</a></li>
                                                    <li><a href="" class="text-decoration-none text-dark">Instrumentation QA & QC</a></li>
                                                    <li><a href="" class="text-decoration-none text-dark">PLC SCADA & DCS Training</a></li>
                                                    <li><a href="" class="text-decoration-none text-dark">Electrician</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contuct Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Corporate Training
                                </a>
                                <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">First Aid Training</a></li>
                                    <li><a class="dropdown-item" href="#">Fire Fighting Training</a></li>
                                    <li><a class="dropdown-item" href="#">First Aid at Workplace</a></li>
                                    <li><a class="dropdown-item" href="">Health and Safety Audit</a></li>
                                    <li><a class="dropdown-item" href="">ISO 45001 Internal Auditor Training</a></li>
                                    <li><a class="dropdown-item" href="">ISO 45001:2018 CONSULTATION</a></li>
                                    <li><a class="dropdown-item" href="">ISO 45001:2015 CONSULTATION</a></li>
                                    <li><a class="dropdown-item" href="">IS 14489:2018</a></li>
                                    <li><a class="dropdown-item" href="">Trade Test Center</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Policy
                                </a>
                                <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Health and Safety General Policy</a></li>
                                    <li><a class="dropdown-item" href="#">Data Protection Policy</a></li>
                                    <li><a class="dropdown-item" href="#">Equality and Diversity Policy</a></li>
                                    <li><a href="" class="dropdown-item">Learning Enviroment Policy</a></li>
                                    <li><a href="" class="dropdown-item">Studentd Complaint Policy</a></li>
                                    <li><a href="" class="dropdown-item">Disciplinary Rule and Regulation</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="col-lg-3 text-white">
                    <marquee behavior="scroll" direction="left">All Courses consist of complete theory, practical
                        and
                        drawing classes along with interview training</marquee>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-header', MyHeader);