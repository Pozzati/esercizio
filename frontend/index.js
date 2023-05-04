function login(user,psw) {
    $.ajax({
        url: '/login?username='+user+"&password="+psw,
        data: { user: user, psw: psw },
        success: function (result) {
            $('#result').text(result);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}
$("#btn").click(function(){
    nome = $("#username").val();
    psw = $("#password").val();
    login(username, password);
});
