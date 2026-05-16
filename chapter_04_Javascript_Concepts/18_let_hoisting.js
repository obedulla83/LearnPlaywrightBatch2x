console.log(score); //reference error: cannot access 'score' before initialization
let score = 100;


{
    //----TDZ for score starts here----
    // console.log(score); //reference error: cannot access 'score' before initialization
    // score = 50; //reference error
    // type score; //reference error
    // ----TDZ for score ends here----

    let score = 100; //declaration reached, TDZ ends.
    console.log(score); //100 (safe to access now)
}