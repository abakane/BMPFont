$(function() {
	var isOn=false;
	var t0=$('#t0'), t1=$('#t1');
	var cs=[];
	var s=[], a=[], lis=[], les=[];
	
	
	$('#toggle').click(function(){
		if( !isOn )
		{
			$(this).text( 'ON'); isOn=true;
			draw();
		}else{
			$(this).text( 'OFF'); isOn=false;
			clear();
		}
		
	});
	$('#sa0').change(reload);
	$('#ss0').change(reload);
	$('#lis0').change(reload);
	$('#les0').change(reload);
	$('#sa1').change(reload);
	$('#ss1').change(reload);
	$('#lis1').change(reload);
	$('#les1').change(reload);
	$('#ta0').change(reload);
	$('#ta1').change(reload);
		
	
	function reload()
	{
		a = [$('#sa0').val(), $('#sa1').val()];
		s = [$('#ss0').val(), $('#ss1').val()];
		lis = [Number($('#lis0').val()), Number($('#lis1').val())];
		les = [Number($('#les0').val()), Number($('#les1').val())];
		cs = [ $('#ta0').val(), $('#ta1').val()];
		if( isOn )
		{
			clear();
			draw();
		}else{
			t0.text(cs[0]);
			t1.text(cs[1]);
		}
	}
	
	function draw()
	{
		BMPFont.replace( t0[0], {width:470, align:a[0], scale:s[0], lineSpacing:lis[0], letterSpacing:les[0], font:BMPFont.fonts.serif});
		BMPFont.replace( t1[0], {width:470, align:a[1], scale:s[1], lineSpacing:lis[1], letterSpacing:les[1]});
	}
	function clear()
	{
		BMPFont.clear(t0[0]);
		BMPFont.clear(t1[0]);
		t0.text(cs[0]);
		t1.text(cs[1]);
	}
	reload();
});