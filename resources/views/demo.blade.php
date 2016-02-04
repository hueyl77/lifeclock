@extends('layouts.main')
@section('title', "Demo")
@section('content')

<div id="main" class="container">
    <div class="row">
        <div class="col-xs-12">
            <h1>Demo</h1>

            <div id="lifeclockContainer"
                style="margin: 0 auto; width: 80%; height: 300px; border: 2px solid orange;  background: #999;">
                <div class="timerDisplay" style="position: relative; top: 50%; transform: translateY(-50%); font-size: 50px; text-align: center;">
                0:00:00
                </div>
            </div>
        </div>
    </div>

    <div class="row" style="margin-top: 20px;">
        <div class="col-xs-8">
            <label>Enter Your Birthday: </label>
            <input type="date" name="birthdate" value="1977-08-31" />
        </div>
        <div class="col-xs-4">
            <input type="button" value=" Go " onclick="startLifeClock()" />
        </div>
    </div>
</div>
@stop

@section('bottom-scripts')
<script type="text/javascript" src="/js/lifeclock.js"></script>
<script>
$(document).ready(function(){
    window.lifeclock = $('#lifeclockContainer').lifeclock();
});

function startLifeClock () {
    var birthdate = $("input[name='birthdate']").val();
    console.log(birthdate);
    window.lifeclock.startTimerByBirthDate(birthdate);
}
</script>
@stop