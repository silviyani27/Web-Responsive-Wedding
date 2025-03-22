<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Lilanti's Wedding Organizer</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="aboutstyle.css">
</head>
<body>

   <!-- Navbar -->
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#">Lilanti's Wedding Organizer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="home.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="services.html" id="servicesDropdown" role="button" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="indoor.html">Indoor Venue</a></li>
                        <li><a class="dropdown-item" href="outdoor.html">Outdoor Venue</a></li>
                        <li><a class="dropdown-item" href="makeup.html">Make Up</a></li>
                        <li><a class="dropdown-item" href="weddingdress.html">Wedding Dress</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="packages.html" id="packagesDropdown" role="button" data-bs-toggle="dropdown">Packages</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="intimate.html">Intimate Package</a></li>
                        <li><a class="dropdown-item" href="deatilstandard.html">Standard Package</a></li>
                        <li><a class="dropdown-item" href="premium.html">Premium Package</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>

    <!-- About Us Section -->
    <section class="about-us">
        <div class="container">
            <h1 class="section-title text-center">About Us</h1>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="image/venueIn.jpeg" alt="About Us" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>
                        Lilanti's Wedding Organizer is dedicated to making your wedding dreams come true.
                        With years of experience, we provide personalized planning and top-tier services
                        to ensure your special day is stress-free and unforgettable.
                    </p>
                    <p>
                        Our team of experts is passionate about curating unique wedding experiences, 
                        from intimate gatherings to grand celebrations. Let us bring your vision to life!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-3">
        &copy; 2024 Lilanti's Wedding Organizer. All rights reserved.
    </footer>

    <!-- Bootstrap & jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>

</body>
</html>
