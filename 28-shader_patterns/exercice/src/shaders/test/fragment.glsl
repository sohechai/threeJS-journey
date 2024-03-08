varying vec2 vUv;

void main()
{
	// float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
	// barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));

	// float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
	// barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

	// float strength = step(0.4, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

     vec3 color = vec3(vUv.y);
    gl_FragColor = vec4(color, 1.0);
}