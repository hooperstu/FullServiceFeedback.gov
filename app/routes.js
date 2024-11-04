//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

// Index route
router.get('/', function (req, res) {
    res.render('index');
});

// Give your reference number
router.get('/give-your-reference-number', function (req, res) {
    res.render('service-name/give-your-reference-number');
});

router.post('/give-your-reference-number', function (req, res) {
    req.session.data['reference-number'] = req.body['reference-number'];
    res.redirect('/how-satisfied-are-you');
});

// How satisfied are you
router.get('/how-satisfied-are-you', function (req, res) {
    res.render('service-name/how-satisfied-are-you');
});

router.post('/how-satisfied-are-you', function (req, res) {
    req.session.data['satisfaction'] = req.body['satisfaction'];
    res.redirect('/how-easy-was-it');
});

// How easy was it
router.get('/how-easy-was-it', function (req, res) {
    res.render('service-name/how-easy-was-it');
});

router.post('/how-easy-was-it', function (req, res) {
    req.session.data['ease'] = req.body['ease'];
    res.redirect('/how-could-we-improve');
});

// How could we improve
router.get('/how-could-we-improve', function (req, res) {
    res.render('service-name/how-could-we-improve');
});

router.post('/how-could-we-improve', function (req, res) {
    req.session.data['improvement-suggestions'] = req.body['improvement-suggestions'];
    res.redirect('/would-you-like-to-be-contacted');
});

// Would you like to be contacted
router.get('/would-you-like-to-be-contacted', function (req, res) {
    res.render('service-name/would-you-like-to-be-contacted');
});

router.post('/would-you-like-to-be-contacted', function (req, res) {
    req.session.data['contact-preference'] = req.body['contact-preference'];
    if (req.body['contact-preference'].includes('yes')) {
        res.redirect('/contact-details');
    } else {
        res.redirect('/check-your-feedback-answers');
    }
});

// Contact details
router.get('/contact-details', function (req, res) {
    res.render('service-name/contact-details');
});

router.post('/contact-details', function (req, res) {
    req.session.data['phone'] = req.body['phone'];
    req.session.data['email'] = req.body['email'];
    res.redirect('/check-your-feedback-answers');
});

// Check your feedback answers
router.get('/check-your-feedback-answers', function (req, res) {
    res.render('service-name/check-your-feedback-answers');
});

router.post('/check-your-feedback-answers', function (req, res) {
    res.redirect('/confirmation');
});

// Confirmation
router.get('/confirmation', function (req, res) {
    res.render('service-name/confirmation');
});

module.exports = router;
